package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObfuscationSetting
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
public class ObfuscationSetting {
    @JsonProperty("obfuscationSettingType")
    public ObfuscationSettingTypeEnum obfuscationSettingType;
    public ObfuscationSetting withObfuscationSettingType(ObfuscationSettingTypeEnum obfuscationSettingType) {
        this.obfuscationSettingType = obfuscationSettingType;
        return this;
    }
}