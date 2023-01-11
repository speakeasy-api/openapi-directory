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
 * Contact
 * A contact is the end-user who is receiving the email.
**/
public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public Contact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTimestamp")
    public OffsetDateTime lastUpdatedTimestamp;
    public Contact withLastUpdatedTimestamp(OffsetDateTime lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicDefaultPreferences")
    public TopicPreference[] topicDefaultPreferences;
    public Contact withTopicDefaultPreferences(TopicPreference[] topicDefaultPreferences) {
        this.topicDefaultPreferences = topicDefaultPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicPreferences")
    public TopicPreference[] topicPreferences;
    public Contact withTopicPreferences(TopicPreference[] topicPreferences) {
        this.topicPreferences = topicPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnsubscribeAll")
    public Boolean unsubscribeAll;
    public Contact withUnsubscribeAll(Boolean unsubscribeAll) {
        this.unsubscribeAll = unsubscribeAll;
        return this;
    }
}