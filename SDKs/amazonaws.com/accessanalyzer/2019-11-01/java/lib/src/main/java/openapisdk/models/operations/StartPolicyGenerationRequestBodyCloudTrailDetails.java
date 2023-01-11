package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StartPolicyGenerationRequestBodyCloudTrailDetails
 * Contains information about CloudTrail access.
**/
public class StartPolicyGenerationRequestBodyCloudTrailDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessRole")
    public String accessRole;
    public StartPolicyGenerationRequestBodyCloudTrailDetails withAccessRole(String accessRole) {
        this.accessRole = accessRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public StartPolicyGenerationRequestBodyCloudTrailDetails withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public StartPolicyGenerationRequestBodyCloudTrailDetails withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trails")
    public openapisdk.models.shared.Trail[] trails;
    public StartPolicyGenerationRequestBodyCloudTrailDetails withTrails(openapisdk.models.shared.Trail[] trails) {
        this.trails = trails;
        return this;
    }
}