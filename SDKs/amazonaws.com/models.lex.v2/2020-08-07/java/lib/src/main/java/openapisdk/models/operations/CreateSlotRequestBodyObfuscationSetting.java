package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSlotRequestBodyObfuscationSetting
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
public class CreateSlotRequestBodyObfuscationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscationSettingType")
    public openapisdk.models.shared.ObfuscationSettingTypeEnum obfuscationSettingType;
    public CreateSlotRequestBodyObfuscationSetting withObfuscationSettingType(openapisdk.models.shared.ObfuscationSettingTypeEnum obfuscationSettingType) {
        this.obfuscationSettingType = obfuscationSettingType;
        return this;
    }
}