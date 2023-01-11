package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VaultNotificationConfig
 * Represents a vault's notification configuration.
**/
public class VaultNotificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public String[] events;
    public VaultNotificationConfig withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SNSTopic")
    public String snsTopic;
    public VaultNotificationConfig withSnsTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
}