package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersUpdatePrefsRequestBody {
    @JsonProperty("prefs")
    public java.util.Map<String, Object> prefs;
    public UsersUpdatePrefsRequestBody withPrefs(java.util.Map<String, Object> prefs) {
        this.prefs = prefs;
        return this;
    }
}