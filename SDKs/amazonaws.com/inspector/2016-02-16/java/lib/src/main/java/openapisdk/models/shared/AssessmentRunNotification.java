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
 * AssessmentRunNotification
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
public class AssessmentRunNotification {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public AssessmentRunNotification withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("error")
    public Boolean error;
    public AssessmentRunNotification withError(Boolean error) {
        this.error = error;
        return this;
    }
    @JsonProperty("event")
    public InspectorEventEnum event;
    public AssessmentRunNotification withEvent(InspectorEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AssessmentRunNotification withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsPublishStatusCode")
    public AssessmentRunNotificationSnsStatusCodeEnum snsPublishStatusCode;
    public AssessmentRunNotification withSnsPublishStatusCode(AssessmentRunNotificationSnsStatusCodeEnum snsPublishStatusCode) {
        this.snsPublishStatusCode = snsPublishStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsTopicArn")
    public String snsTopicArn;
    public AssessmentRunNotification withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}