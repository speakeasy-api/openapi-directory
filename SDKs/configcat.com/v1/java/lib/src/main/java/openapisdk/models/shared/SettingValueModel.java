package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SettingValueModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ConfigModel config;
    public SettingValueModel withConfig(ConfigModel config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public EnvironmentModel environment;
    public SettingValueModel withEnvironment(EnvironmentModel environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationLinks")
    public IntegrationLinkModel[] integrationLinks;
    public SettingValueModel withIntegrationLinks(IntegrationLinkModel[] integrationLinks) {
        this.integrationLinks = integrationLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdaterUserEmail")
    public String lastUpdaterUserEmail;
    public SettingValueModel withLastUpdaterUserEmail(String lastUpdaterUserEmail) {
        this.lastUpdaterUserEmail = lastUpdaterUserEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdaterUserFullName")
    public String lastUpdaterUserFullName;
    public SettingValueModel withLastUpdaterUserFullName(String lastUpdaterUserFullName) {
        this.lastUpdaterUserFullName = lastUpdaterUserFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public SettingValueModel withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutPercentageItems")
    public RolloutPercentageItemModel[] rolloutPercentageItems;
    public SettingValueModel withRolloutPercentageItems(RolloutPercentageItemModel[] rolloutPercentageItems) {
        this.rolloutPercentageItems = rolloutPercentageItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutRules")
    public RolloutRuleModel[] rolloutRules;
    public SettingValueModel withRolloutRules(RolloutRuleModel[] rolloutRules) {
        this.rolloutRules = rolloutRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setting")
    public SettingDataModel setting;
    public SettingValueModel withSetting(SettingDataModel setting) {
        this.setting = setting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingTags")
    public SettingTagModel[] settingTags;
    public SettingValueModel withSettingTags(SettingTagModel[] settingTags) {
        this.settingTags = settingTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public SettingValueModel withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public SettingValueModel withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}