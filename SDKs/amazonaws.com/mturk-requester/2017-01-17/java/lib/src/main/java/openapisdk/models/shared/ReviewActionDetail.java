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
 * ReviewActionDetail
 *  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. 
**/
public class ReviewActionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActionId")
    public String actionId;
    public ReviewActionDetail withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActionName")
    public String actionName;
    public ReviewActionDetail withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompleteTime")
    public OffsetDateTime completeTime;
    public ReviewActionDetail withCompleteTime(OffsetDateTime completeTime) {
        this.completeTime = completeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public ReviewActionDetail withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public String result;
    public ReviewActionDetail withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ReviewActionStatusEnum status;
    public ReviewActionDetail withStatus(ReviewActionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetId")
    public String targetId;
    public ReviewActionDetail withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetType")
    public String targetType;
    public ReviewActionDetail withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
}