package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCodeBuildProjectEnvironmentRegistryCredential
 * The credentials for access to a private registry.
**/
public class AwsCodeBuildProjectEnvironmentRegistryCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credential")
    public String credential;
    public AwsCodeBuildProjectEnvironmentRegistryCredential withCredential(String credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CredentialProvider")
    public String credentialProvider;
    public AwsCodeBuildProjectEnvironmentRegistryCredential withCredentialProvider(String credentialProvider) {
        this.credentialProvider = credentialProvider;
        return this;
    }
}