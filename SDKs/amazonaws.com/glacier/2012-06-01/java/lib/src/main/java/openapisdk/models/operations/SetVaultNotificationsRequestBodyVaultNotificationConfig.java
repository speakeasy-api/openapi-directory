package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetVaultNotificationsRequestBodyVaultNotificationConfig
 * Represents a vault's notification configuration.
**/
public class SetVaultNotificationsRequestBodyVaultNotificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public String[] events;
    public SetVaultNotificationsRequestBodyVaultNotificationConfig withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SNSTopic")
    public String snsTopic;
    public SetVaultNotificationsRequestBodyVaultNotificationConfig withSnsTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
}