package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetVaultNotificationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaultNotificationConfig")
    public SetVaultNotificationsRequestBodyVaultNotificationConfig vaultNotificationConfig;
    public SetVaultNotificationsRequestBody withVaultNotificationConfig(SetVaultNotificationsRequestBodyVaultNotificationConfig vaultNotificationConfig) {
        this.vaultNotificationConfig = vaultNotificationConfig;
        return this;
    }
}