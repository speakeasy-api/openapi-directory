package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckSuitePreferencePreferencesAutoTriggerChecks {
    @JsonProperty("app_id")
    public Long appId;
    public CheckSuitePreferencePreferencesAutoTriggerChecks withAppId(Long appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("setting")
    public Boolean setting;
    public CheckSuitePreferencePreferencesAutoTriggerChecks withSetting(Boolean setting) {
        this.setting = setting;
        return this;
    }
}