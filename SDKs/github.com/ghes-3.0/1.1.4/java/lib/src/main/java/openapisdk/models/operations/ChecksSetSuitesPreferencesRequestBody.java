package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChecksSetSuitesPreferencesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_trigger_checks")
    public ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[] autoTriggerChecks;
    public ChecksSetSuitesPreferencesRequestBody withAutoTriggerChecks(ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[] autoTriggerChecks) {
        this.autoTriggerChecks = autoTriggerChecks;
        return this;
    }
}