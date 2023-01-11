package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveAppAccessRestrictionsRequestBody {
    @JsonProperty("apps")
    public String[] apps;
    public ReposRemoveAppAccessRestrictionsRequestBody withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
}