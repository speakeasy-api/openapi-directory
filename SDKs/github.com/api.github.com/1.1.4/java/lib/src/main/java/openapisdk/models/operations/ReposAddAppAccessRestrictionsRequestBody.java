package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddAppAccessRestrictionsRequestBody {
    @JsonProperty("apps")
    public String[] apps;
    public ReposAddAppAccessRestrictionsRequestBody withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
}