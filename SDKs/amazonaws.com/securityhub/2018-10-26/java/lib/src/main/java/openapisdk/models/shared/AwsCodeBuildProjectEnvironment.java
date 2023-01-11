package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCodeBuildProjectEnvironment
 * Information about the build environment for this build project.
**/
public class AwsCodeBuildProjectEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public AwsCodeBuildProjectEnvironment withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImagePullCredentialsType")
    public String imagePullCredentialsType;
    public AwsCodeBuildProjectEnvironment withImagePullCredentialsType(String imagePullCredentialsType) {
        this.imagePullCredentialsType = imagePullCredentialsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryCredential")
    public AwsCodeBuildProjectEnvironmentRegistryCredential registryCredential;
    public AwsCodeBuildProjectEnvironment withRegistryCredential(AwsCodeBuildProjectEnvironmentRegistryCredential registryCredential) {
        this.registryCredential = registryCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsCodeBuildProjectEnvironment withType(String type) {
        this.type = type;
        return this;
    }
}