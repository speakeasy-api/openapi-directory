package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks {
    @JsonProperty("app_id")
    public Long appId;
    public ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks withAppId(Long appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("setting")
    public Boolean setting;
    public ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks withSetting(Boolean setting) {
        this.setting = setting;
        return this;
    }
}