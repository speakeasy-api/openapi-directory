package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBackendEnvironmentsResult
 *  The result structure for the list backend environments result. 
**/
public class ListBackendEnvironmentsResult {
    @JsonProperty("backendEnvironments")
    public BackendEnvironment[] backendEnvironments;
    public ListBackendEnvironmentsResult withBackendEnvironments(BackendEnvironment[] backendEnvironments) {
        this.backendEnvironments = backendEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBackendEnvironmentsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}