package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAppResult {
    @JsonProperty("app")
    public App app;
    public GetAppResult withApp(App app) {
        this.app = app;
        return this;
    }
}