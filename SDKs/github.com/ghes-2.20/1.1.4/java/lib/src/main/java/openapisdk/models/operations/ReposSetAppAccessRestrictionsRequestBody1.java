package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetAppAccessRestrictionsRequestBody1 {
    @JsonProperty("apps")
    public String[] apps;
    public ReposSetAppAccessRestrictionsRequestBody1 withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
}