package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public SettingValueModelHaljsonEmbeddedConfig config;
    public SettingValueModelHaljsonEmbedded withConfig(SettingValueModelHaljsonEmbeddedConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public SettingValueModelHaljsonEmbeddedEnvironment environment;
    public SettingValueModelHaljsonEmbedded withEnvironment(SettingValueModelHaljsonEmbeddedEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationLinks")
    public SettingValueModelHaljsonEmbeddedIntegrationLinks[] integrationLinks;
    public SettingValueModelHaljsonEmbedded withIntegrationLinks(SettingValueModelHaljsonEmbeddedIntegrationLinks[] integrationLinks) {
        this.integrationLinks = integrationLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setting")
    public SettingValueModelHaljsonEmbeddedSetting setting;
    public SettingValueModelHaljsonEmbedded withSetting(SettingValueModelHaljsonEmbeddedSetting setting) {
        this.setting = setting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingTags")
    public SettingValueModelHaljsonEmbeddedSettingTags[] settingTags;
    public SettingValueModelHaljsonEmbedded withSettingTags(SettingValueModelHaljsonEmbeddedSettingTags[] settingTags) {
        this.settingTags = settingTags;
        return this;
    }
}