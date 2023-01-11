package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountRecoverySettingType
 * The data type for <code>AccountRecoverySetting</code>.
**/
public class AccountRecoverySettingType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecoveryMechanisms")
    public RecoveryOptionType[] recoveryMechanisms;
    public AccountRecoverySettingType withRecoveryMechanisms(RecoveryOptionType[] recoveryMechanisms) {
        this.recoveryMechanisms = recoveryMechanisms;
        return this;
    }
}