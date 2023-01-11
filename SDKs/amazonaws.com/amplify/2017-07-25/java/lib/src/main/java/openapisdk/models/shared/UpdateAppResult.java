package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateAppResult
 *  The result structure for an Amplify app update request. 
**/
public class UpdateAppResult {
    @JsonProperty("app")
    public App app;
    public UpdateAppResult withApp(App app) {
        this.app = app;
        return this;
    }
}