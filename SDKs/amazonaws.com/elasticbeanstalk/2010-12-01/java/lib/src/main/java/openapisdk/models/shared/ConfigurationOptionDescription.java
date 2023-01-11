package openapisdk.models.shared;



/**
 * ConfigurationOptionDescription
 * Describes the possible values for a configuration option.
**/
public class ConfigurationOptionDescription {
    public String changeSeverity;
    public ConfigurationOptionDescription withChangeSeverity(String changeSeverity) {
        this.changeSeverity = changeSeverity;
        return this;
    }
    public String defaultValue;
    public ConfigurationOptionDescription withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Long maxLength;
    public ConfigurationOptionDescription withMaxLength(Long maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    public Long maxValue;
    public ConfigurationOptionDescription withMaxValue(Long maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    public Long minValue;
    public ConfigurationOptionDescription withMinValue(Long minValue) {
        this.minValue = minValue;
        return this;
    }
    public String name;
    public ConfigurationOptionDescription withName(String name) {
        this.name = name;
        return this;
    }
    public String namespace;
    public ConfigurationOptionDescription withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    public OptionRestrictionRegex regex;
    public ConfigurationOptionDescription withRegex(OptionRestrictionRegex regex) {
        this.regex = regex;
        return this;
    }
    public Boolean userDefined;
    public ConfigurationOptionDescription withUserDefined(Boolean userDefined) {
        this.userDefined = userDefined;
        return this;
    }
    public String[] valueOptions;
    public ConfigurationOptionDescription withValueOptions(String[] valueOptions) {
        this.valueOptions = valueOptions;
        return this;
    }
    public ConfigurationOptionValueTypeEnum valueType;
    public ConfigurationOptionDescription withValueType(ConfigurationOptionValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}