package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAppResult {
    @JsonProperty("app")
    public App app;
    public CreateAppResult withApp(App app) {
        this.app = app;
        return this;
    }
}