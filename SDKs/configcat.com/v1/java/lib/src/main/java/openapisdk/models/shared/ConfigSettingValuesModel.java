package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigSettingValuesModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ConfigModel config;
    public ConfigSettingValuesModel withConfig(ConfigModel config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public EnvironmentModel environment;
    public ConfigSettingValuesModel withEnvironment(EnvironmentModel environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public ConfigSettingValuesModel withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingValues")
    public ConfigSettingValueModel[] settingValues;
    public ConfigSettingValuesModel withSettingValues(ConfigSettingValueModel[] settingValues) {
        this.settingValues = settingValues;
        return this;
    }
}