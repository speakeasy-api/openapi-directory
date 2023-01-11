package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReceiverInput
 * A receiver of reports from the data hub
**/
public class ReceiverInput {
    @JsonProperty("description")
    public String description;
    public ReceiverInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jurisdictionalFilters")
    public ReceiverJurisdictionalFilters[] jurisdictionalFilters;
    public ReceiverInput withJurisdictionalFilters(ReceiverJurisdictionalFilters[] jurisdictionalFilters) {
        this.jurisdictionalFilters = jurisdictionalFilters;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReceiverInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("timing")
    public ReceiverTiming timing;
    public ReceiverInput withTiming(ReceiverTiming timing) {
        this.timing = timing;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public ReceiverInput withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public Object[] translations;
    public ReceiverInput withTranslations(Object[] translations) {
        this.translations = translations;
        return this;
    }
}