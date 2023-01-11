package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Cluster
 * An object representing an Amazon EKS cluster.
**/
public class Cluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Cluster withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthority")
    public Certificate certificateAuthority;
    public Cluster withCertificateAuthority(Certificate certificateAuthority) {
        this.certificateAuthority = certificateAuthority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public Cluster withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorConfig")
    public ConnectorConfigResponse connectorConfig;
    public Cluster withConnectorConfig(ConnectorConfigResponse connectorConfig) {
        this.connectorConfig = connectorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Cluster withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig[] encryptionConfig;
    public Cluster withEncryptionConfig(EncryptionConfig[] encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public Cluster withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public Identity identity;
    public Cluster withIdentity(Identity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesNetworkConfig")
    public KubernetesNetworkConfigResponse kubernetesNetworkConfig;
    public Cluster withKubernetesNetworkConfig(KubernetesNetworkConfigResponse kubernetesNetworkConfig) {
        this.kubernetesNetworkConfig = kubernetesNetworkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public Logging logging;
    public Cluster withLogging(Logging logging) {
        this.logging = logging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Cluster withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformVersion")
    public String platformVersion;
    public Cluster withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesVpcConfig")
    public VpcConfigResponse resourcesVpcConfig;
    public Cluster withResourcesVpcConfig(VpcConfigResponse resourcesVpcConfig) {
        this.resourcesVpcConfig = resourcesVpcConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public Cluster withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ClusterStatusEnum status;
    public Cluster withStatus(ClusterStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Cluster withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Cluster withVersion(String version) {
        this.version = version;
        return this;
    }
}