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
 * GetBulkPublishDetailsResponse
 * The output for the GetBulkPublishDetails operation.
**/
public class GetBulkPublishDetailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("BulkPublishCompleteTime")
    public OffsetDateTime bulkPublishCompleteTime;
    public GetBulkPublishDetailsResponse withBulkPublishCompleteTime(OffsetDateTime bulkPublishCompleteTime) {
        this.bulkPublishCompleteTime = bulkPublishCompleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("BulkPublishStartTime")
    public OffsetDateTime bulkPublishStartTime;
    public GetBulkPublishDetailsResponse withBulkPublishStartTime(OffsetDateTime bulkPublishStartTime) {
        this.bulkPublishStartTime = bulkPublishStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BulkPublishStatus")
    public BulkPublishStatusEnum bulkPublishStatus;
    public GetBulkPublishDetailsResponse withBulkPublishStatus(BulkPublishStatusEnum bulkPublishStatus) {
        this.bulkPublishStatus = bulkPublishStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureMessage")
    public String failureMessage;
    public GetBulkPublishDetailsResponse withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public GetBulkPublishDetailsResponse withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}