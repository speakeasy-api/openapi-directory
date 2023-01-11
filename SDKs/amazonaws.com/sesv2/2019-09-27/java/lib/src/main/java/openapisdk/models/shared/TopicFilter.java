package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TopicFilter
 * Used for filtering by a specific topic preference.
**/
public class TopicFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicName")
    public String topicName;
    public TopicFilter withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDefaultIfPreferenceUnavailable")
    public Boolean useDefaultIfPreferenceUnavailable;
    public TopicFilter withUseDefaultIfPreferenceUnavailable(Boolean useDefaultIfPreferenceUnavailable) {
        this.useDefaultIfPreferenceUnavailable = useDefaultIfPreferenceUnavailable;
        return this;
    }
}