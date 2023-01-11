package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointSetting
 * Endpoint settings.
**/
public class EndpointSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Applicability")
    public String applicability;
    public EndpointSetting withApplicability(String applicability) {
        this.applicability = applicability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultValue")
    public String defaultValue;
    public EndpointSetting withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnumValues")
    public String[] enumValues;
    public EndpointSetting withEnumValues(String[] enumValues) {
        this.enumValues = enumValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntValueMax")
    public Long intValueMax;
    public EndpointSetting withIntValueMax(Long intValueMax) {
        this.intValueMax = intValueMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntValueMin")
    public Long intValueMin;
    public EndpointSetting withIntValueMin(Long intValueMin) {
        this.intValueMin = intValueMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public EndpointSetting withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sensitive")
    public Boolean sensitive;
    public EndpointSetting withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public EndpointSettingTypeValueEnum type;
    public EndpointSetting withType(EndpointSettingTypeValueEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Units")
    public String units;
    public EndpointSetting withUnits(String units) {
        this.units = units;
        return this;
    }
}