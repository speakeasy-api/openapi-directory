package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetAppAccessRestrictionsRequestBody {
    @JsonProperty("apps")
    public String[] apps;
    public ReposSetAppAccessRestrictionsRequestBody withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
}