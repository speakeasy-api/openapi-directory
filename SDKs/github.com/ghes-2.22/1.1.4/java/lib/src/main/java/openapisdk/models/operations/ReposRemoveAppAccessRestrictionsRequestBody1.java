package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveAppAccessRestrictionsRequestBody1 {
    @JsonProperty("apps")
    public String[] apps;
    public ReposRemoveAppAccessRestrictionsRequestBody1 withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
}