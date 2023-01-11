package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteAppResult
 *  The result structure for the delete app request. 
**/
public class DeleteAppResult {
    @JsonProperty("app")
    public App app;
    public DeleteAppResult withApp(App app) {
        this.app = app;
        return this;
    }
}