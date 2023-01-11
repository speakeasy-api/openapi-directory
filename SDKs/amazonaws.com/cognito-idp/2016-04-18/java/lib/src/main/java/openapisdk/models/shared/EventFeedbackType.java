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
 * EventFeedbackType
 * Specifies the event feedback type.
**/
public class EventFeedbackType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FeedbackDate")
    public OffsetDateTime feedbackDate;
    public EventFeedbackType withFeedbackDate(OffsetDateTime feedbackDate) {
        this.feedbackDate = feedbackDate;
        return this;
    }
    @JsonProperty("FeedbackValue")
    public FeedbackValueTypeEnum feedbackValue;
    public EventFeedbackType withFeedbackValue(FeedbackValueTypeEnum feedbackValue) {
        this.feedbackValue = feedbackValue;
        return this;
    }
    @JsonProperty("Provider")
    public String provider;
    public EventFeedbackType withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}