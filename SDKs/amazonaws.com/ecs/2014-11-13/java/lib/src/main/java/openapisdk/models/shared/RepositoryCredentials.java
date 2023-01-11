package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RepositoryCredentials
 * The repository credentials for private registry authentication.
**/
public class RepositoryCredentials {
    @JsonProperty("credentialsParameter")
    public String credentialsParameter;
    public RepositoryCredentials withCredentialsParameter(String credentialsParameter) {
        this.credentialsParameter = credentialsParameter;
        return this;
    }
}