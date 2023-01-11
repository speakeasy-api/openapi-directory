package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ConnectionConfigurationInput[] configuration;
    public ConnectionInput withConfiguration(ConnectionConfigurationInput[] configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public ConnectionInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public ConnectionInput withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public java.util.Map<String, Object> settings;
    public ConnectionInput withSettings(java.util.Map<String, Object> settings) {
        this.settings = settings;
        return this;
    }
}