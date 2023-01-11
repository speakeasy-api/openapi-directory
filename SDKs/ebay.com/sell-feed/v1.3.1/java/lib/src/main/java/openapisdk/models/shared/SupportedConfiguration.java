package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SupportedConfiguration
 * An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.
**/
public class SupportedConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public String defaultValue;
    public SupportedConfiguration withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public SupportedConfiguration withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public String usage;
    public SupportedConfiguration withUsage(String usage) {
        this.usage = usage;
        return this;
    }
}