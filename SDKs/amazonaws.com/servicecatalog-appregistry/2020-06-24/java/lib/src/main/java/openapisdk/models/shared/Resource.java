package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Resource
 *  The information about the resource.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Resource withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("associationTime")
    public OffsetDateTime associationTime;
    public Resource withAssociationTime(OffsetDateTime associationTime) {
        this.associationTime = associationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrations")
    public ResourceIntegrations integrations;
    public Resource withIntegrations(ResourceIntegrations integrations) {
        this.integrations = integrations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Resource withName(String name) {
        this.name = name;
        return this;
    }
}