package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateContactRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesData")
    public String attributesData;
    public UpdateContactRequestBody withAttributesData(String attributesData) {
        this.attributesData = attributesData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicPreferences")
    public openapisdk.models.shared.TopicPreference[] topicPreferences;
    public UpdateContactRequestBody withTopicPreferences(openapisdk.models.shared.TopicPreference[] topicPreferences) {
        this.topicPreferences = topicPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnsubscribeAll")
    public Boolean unsubscribeAll;
    public UpdateContactRequestBody withUnsubscribeAll(Boolean unsubscribeAll) {
        this.unsubscribeAll = unsubscribeAll;
        return this;
    }
}