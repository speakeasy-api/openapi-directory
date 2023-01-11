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
 * EndpointFilter
 * The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time. 
**/
public class EndpointFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTimeAfter")
    public OffsetDateTime creationTimeAfter;
    public EndpointFilter withCreationTimeAfter(OffsetDateTime creationTimeAfter) {
        this.creationTimeAfter = creationTimeAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTimeBefore")
    public OffsetDateTime creationTimeBefore;
    public EndpointFilter withCreationTimeBefore(OffsetDateTime creationTimeBefore) {
        this.creationTimeBefore = creationTimeBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelArn")
    public String modelArn;
    public EndpointFilter withModelArn(String modelArn) {
        this.modelArn = modelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EndpointStatusEnum status;
    public EndpointFilter withStatus(EndpointStatusEnum status) {
        this.status = status;
        return this;
    }
}