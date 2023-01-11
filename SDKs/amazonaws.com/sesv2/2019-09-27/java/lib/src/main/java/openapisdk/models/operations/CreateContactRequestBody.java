package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContactRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesData")
    public String attributesData;
    public CreateContactRequestBody withAttributesData(String attributesData) {
        this.attributesData = attributesData;
        return this;
    }
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public CreateContactRequestBody withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicPreferences")
    public openapisdk.models.shared.TopicPreference[] topicPreferences;
    public CreateContactRequestBody withTopicPreferences(openapisdk.models.shared.TopicPreference[] topicPreferences) {
        this.topicPreferences = topicPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnsubscribeAll")
    public Boolean unsubscribeAll;
    public CreateContactRequestBody withUnsubscribeAll(Boolean unsubscribeAll) {
        this.unsubscribeAll = unsubscribeAll;
        return this;
    }
}