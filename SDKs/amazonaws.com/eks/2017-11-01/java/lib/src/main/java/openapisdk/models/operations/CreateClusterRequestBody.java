package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClusterRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateClusterRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public openapisdk.models.shared.EncryptionConfig[] encryptionConfig;
    public CreateClusterRequestBody withEncryptionConfig(openapisdk.models.shared.EncryptionConfig[] encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesNetworkConfig")
    public CreateClusterRequestBodyKubernetesNetworkConfig kubernetesNetworkConfig;
    public CreateClusterRequestBody withKubernetesNetworkConfig(CreateClusterRequestBodyKubernetesNetworkConfig kubernetesNetworkConfig) {
        this.kubernetesNetworkConfig = kubernetesNetworkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public CreateClusterRequestBodyLogging logging;
    public CreateClusterRequestBody withLogging(CreateClusterRequestBodyLogging logging) {
        this.logging = logging;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateClusterRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("resourcesVpcConfig")
    public CreateClusterRequestBodyResourcesVpcConfig resourcesVpcConfig;
    public CreateClusterRequestBody withResourcesVpcConfig(CreateClusterRequestBodyResourcesVpcConfig resourcesVpcConfig) {
        this.resourcesVpcConfig = resourcesVpcConfig;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateClusterRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateClusterRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CreateClusterRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}