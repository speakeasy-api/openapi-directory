package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectEnvironment
 * Information about the build environment of the build project.
**/
public class ProjectEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;
    public ProjectEnvironment withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("computeType")
    public ComputeTypeEnum computeType;
    public ProjectEnvironment withComputeType(ComputeTypeEnum computeType) {
        this.computeType = computeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public EnvironmentVariable[] environmentVariables;
    public ProjectEnvironment withEnvironmentVariables(EnvironmentVariable[] environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonProperty("image")
    public String image;
    public ProjectEnvironment withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePullCredentialsType")
    public ImagePullCredentialsTypeEnum imagePullCredentialsType;
    public ProjectEnvironment withImagePullCredentialsType(ImagePullCredentialsTypeEnum imagePullCredentialsType) {
        this.imagePullCredentialsType = imagePullCredentialsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privilegedMode")
    public Boolean privilegedMode;
    public ProjectEnvironment withPrivilegedMode(Boolean privilegedMode) {
        this.privilegedMode = privilegedMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryCredential")
    public RegistryCredential registryCredential;
    public ProjectEnvironment withRegistryCredential(RegistryCredential registryCredential) {
        this.registryCredential = registryCredential;
        return this;
    }
    @JsonProperty("type")
    public EnvironmentTypeEnum type;
    public ProjectEnvironment withType(EnvironmentTypeEnum type) {
        this.type = type;
        return this;
    }
}