package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDevEndpointRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arguments")
    public java.util.Map<String, String> arguments;
    public CreateDevEndpointRequest withArguments(java.util.Map<String, String> arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonProperty("EndpointName")
    public String endpointName;
    public CreateDevEndpointRequest withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraJarsS3Path")
    public String extraJarsS3Path;
    public CreateDevEndpointRequest withExtraJarsS3Path(String extraJarsS3Path) {
        this.extraJarsS3Path = extraJarsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraPythonLibsS3Path")
    public String extraPythonLibsS3Path;
    public CreateDevEndpointRequest withExtraPythonLibsS3Path(String extraPythonLibsS3Path) {
        this.extraPythonLibsS3Path = extraPythonLibsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public CreateDevEndpointRequest withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfNodes")
    public Long numberOfNodes;
    public CreateDevEndpointRequest withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfWorkers")
    public Long numberOfWorkers;
    public CreateDevEndpointRequest withNumberOfWorkers(Long numberOfWorkers) {
        this.numberOfWorkers = numberOfWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKey")
    public String publicKey;
    public CreateDevEndpointRequest withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKeys")
    public String[] publicKeys;
    public CreateDevEndpointRequest withPublicKeys(String[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public CreateDevEndpointRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityConfiguration")
    public String securityConfiguration;
    public CreateDevEndpointRequest withSecurityConfiguration(String securityConfiguration) {
        this.securityConfiguration = securityConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public CreateDevEndpointRequest withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public CreateDevEndpointRequest withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateDevEndpointRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerType")
    public WorkerTypeEnum workerType;
    public CreateDevEndpointRequest withWorkerType(WorkerTypeEnum workerType) {
        this.workerType = workerType;
        return this;
    }
}