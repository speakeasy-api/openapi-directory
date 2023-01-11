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
 * ConfigurationTag
 * Tags for a configuration item. Tags are metadata that help you categorize IT assets.
**/
public class ConfigurationTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationId")
    public String configurationId;
    public ConfigurationTag withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationType")
    public ConfigurationItemTypeEnum configurationType;
    public ConfigurationTag withConfigurationType(ConfigurationItemTypeEnum configurationType) {
        this.configurationType = configurationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ConfigurationTag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeOfCreation")
    public OffsetDateTime timeOfCreation;
    public ConfigurationTag withTimeOfCreation(OffsetDateTime timeOfCreation) {
        this.timeOfCreation = timeOfCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ConfigurationTag withValue(String value) {
        this.value = value;
        return this;
    }
}