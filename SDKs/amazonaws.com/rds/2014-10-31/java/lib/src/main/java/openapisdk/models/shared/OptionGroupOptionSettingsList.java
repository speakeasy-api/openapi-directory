package openapisdk.models.shared;



/**
 * OptionGroupOptionSettingsList
 * Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
**/
public class OptionGroupOptionSettingsList {
    public String allowedValues;
    public OptionGroupOptionSettingsList withAllowedValues(String allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    public String applyType;
    public OptionGroupOptionSettingsList withApplyType(String applyType) {
        this.applyType = applyType;
        return this;
    }
    public String defaultValue;
    public OptionGroupOptionSettingsList withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean isModifiable;
    public OptionGroupOptionSettingsList withIsModifiable(Boolean isModifiable) {
        this.isModifiable = isModifiable;
        return this;
    }
    public Boolean isRequired;
    public OptionGroupOptionSettingsList withIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
        return this;
    }
    public MinimumEngineVersionPerAllowedValueList[] minimumEngineVersionPerAllowedValue;
    public OptionGroupOptionSettingsList withMinimumEngineVersionPerAllowedValue(MinimumEngineVersionPerAllowedValueList[] minimumEngineVersionPerAllowedValue) {
        this.minimumEngineVersionPerAllowedValue = minimumEngineVersionPerAllowedValue;
        return this;
    }
    public String settingDescription;
    public OptionGroupOptionSettingsList withSettingDescription(String settingDescription) {
        this.settingDescription = settingDescription;
        return this;
    }
    public String settingName;
    public OptionGroupOptionSettingsList withSettingName(String settingName) {
        this.settingName = settingName;
        return this;
    }
}