package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSlotRequestBodyObfuscationSetting
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
public class UpdateSlotRequestBodyObfuscationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscationSettingType")
    public openapisdk.models.shared.ObfuscationSettingTypeEnum obfuscationSettingType;
    public UpdateSlotRequestBodyObfuscationSetting withObfuscationSettingType(openapisdk.models.shared.ObfuscationSettingTypeEnum obfuscationSettingType) {
        this.obfuscationSettingType = obfuscationSettingType;
        return this;
    }
}