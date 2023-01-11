package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionConfigurationDefaults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ConnectionConfigurationDefaults withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Object[] options;
    public ConnectionConfigurationDefaults withOptions(Object[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public ConnectionConfigurationDefaultsTargetEnum target;
    public ConnectionConfigurationDefaults withTarget(ConnectionConfigurationDefaultsTargetEnum target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public ConnectionConfigurationDefaults withValue(Object value) {
        this.value = value;
        return this;
    }
}