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
 * LastActiveDefinition
 * When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
**/
public class LastActiveDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintLocation")
    public String blueprintLocation;
    public LastActiveDefinition withBlueprintLocation(String blueprintLocation) {
        this.blueprintLocation = blueprintLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintServiceLocation")
    public String blueprintServiceLocation;
    public LastActiveDefinition withBlueprintServiceLocation(String blueprintServiceLocation) {
        this.blueprintServiceLocation = blueprintServiceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LastActiveDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public LastActiveDefinition withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterSpec")
    public String parameterSpec;
    public LastActiveDefinition withParameterSpec(String parameterSpec) {
        this.parameterSpec = parameterSpec;
        return this;
    }
}