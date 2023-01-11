package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckSuitePreferencePreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_trigger_checks")
    public CheckSuitePreferencePreferencesAutoTriggerChecks[] autoTriggerChecks;
    public CheckSuitePreferencePreferences withAutoTriggerChecks(CheckSuitePreferencePreferencesAutoTriggerChecks[] autoTriggerChecks) {
        this.autoTriggerChecks = autoTriggerChecks;
        return this;
    }
}