package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sender
 * An sender of reports to the data hub
**/
public class Sender {
    @JsonProperty("description")
    public String description;
    public Sender withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("format")
    public SenderFormatEnum format;
    public Sender withFormat(SenderFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public SettingMetadata meta;
    public Sender withMeta(SettingMetadata meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Sender withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationName")
    public String organizationName;
    public Sender withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @JsonProperty("schema")
    public String schema;
    public Sender withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public Sender withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}