package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountUpdatePrefsRequestBody {
    @JsonProperty("prefs")
    public java.util.Map<String, Object> prefs;
    public AccountUpdatePrefsRequestBody withPrefs(java.util.Map<String, Object> prefs) {
        this.prefs = prefs;
        return this;
    }
}