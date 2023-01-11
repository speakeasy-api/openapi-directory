package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetContactResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesData")
    public String attributesData;
    public GetContactResponse withAttributesData(String attributesData) {
        this.attributesData = attributesData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactListName")
    public String contactListName;
    public GetContactResponse withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTimestamp")
    public OffsetDateTime createdTimestamp;
    public GetContactResponse withCreatedTimestamp(OffsetDateTime createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public GetContactResponse withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTimestamp")
    public OffsetDateTime lastUpdatedTimestamp;
    public GetContactResponse withLastUpdatedTimestamp(OffsetDateTime lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicDefaultPreferences")
    public TopicPreference[] topicDefaultPreferences;
    public GetContactResponse withTopicDefaultPreferences(TopicPreference[] topicDefaultPreferences) {
        this.topicDefaultPreferences = topicDefaultPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicPreferences")
    public TopicPreference[] topicPreferences;
    public GetContactResponse withTopicPreferences(TopicPreference[] topicPreferences) {
        this.topicPreferences = topicPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnsubscribeAll")
    public Boolean unsubscribeAll;
    public GetContactResponse withUnsubscribeAll(Boolean unsubscribeAll) {
        this.unsubscribeAll = unsubscribeAll;
        return this;
    }
}