package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetVaultNotificationsOutput
 * Contains the Amazon S3 Glacier response to your request.
**/
public class GetVaultNotificationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaultNotificationConfig")
    public VaultNotificationConfig vaultNotificationConfig;
    public GetVaultNotificationsOutput withVaultNotificationConfig(VaultNotificationConfig vaultNotificationConfig) {
        this.vaultNotificationConfig = vaultNotificationConfig;
        return this;
    }
}