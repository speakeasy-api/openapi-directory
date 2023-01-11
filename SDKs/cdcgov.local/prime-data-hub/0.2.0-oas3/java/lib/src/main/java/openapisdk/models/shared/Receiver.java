package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Receiver
 * A receiver of reports from the data hub
**/
public class Receiver {
    @JsonProperty("description")
    public String description;
    public Receiver withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jurisdictionalFilters")
    public ReceiverJurisdictionalFilters[] jurisdictionalFilters;
    public Receiver withJurisdictionalFilters(ReceiverJurisdictionalFilters[] jurisdictionalFilters) {
        this.jurisdictionalFilters = jurisdictionalFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public SettingMetadata meta;
    public Receiver withMeta(SettingMetadata meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Receiver withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationName")
    public String organizationName;
    public Receiver withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @JsonProperty("timing")
    public ReceiverTiming timing;
    public Receiver withTiming(ReceiverTiming timing) {
        this.timing = timing;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public Receiver withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public Object[] translations;
    public Receiver withTranslations(Object[] translations) {
        this.translations = translations;
        return this;
    }
}