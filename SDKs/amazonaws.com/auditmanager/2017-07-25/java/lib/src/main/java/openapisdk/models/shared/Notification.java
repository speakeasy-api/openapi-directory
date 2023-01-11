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
 * Notification
 *  The notification used to inform a user of an update in Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review. 
**/
public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentId")
    public String assessmentId;
    public Notification withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentName")
    public String assessmentName;
    public Notification withAssessmentName(String assessmentName) {
        this.assessmentName = assessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSetId")
    public String controlSetId;
    public Notification withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSetName")
    public String controlSetName;
    public Notification withControlSetName(String controlSetName) {
        this.controlSetName = controlSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Notification withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventTime")
    public OffsetDateTime eventTime;
    public Notification withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Notification withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Notification withSource(String source) {
        this.source = source;
        return this;
    }
}