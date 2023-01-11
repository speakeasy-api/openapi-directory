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
 * BackendEnvironment
 *  Describes the backend environment for an Amplify app. 
**/
public class BackendEnvironment {
    @JsonProperty("backendEnvironmentArn")
    public String backendEnvironmentArn;
    public BackendEnvironment withBackendEnvironmentArn(String backendEnvironmentArn) {
        this.backendEnvironmentArn = backendEnvironmentArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createTime")
    public OffsetDateTime createTime;
    public BackendEnvironment withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentArtifacts")
    public String deploymentArtifacts;
    public BackendEnvironment withDeploymentArtifacts(String deploymentArtifacts) {
        this.deploymentArtifacts = deploymentArtifacts;
        return this;
    }
    @JsonProperty("environmentName")
    public String environmentName;
    public BackendEnvironment withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackName")
    public String stackName;
    public BackendEnvironment withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updateTime")
    public OffsetDateTime updateTime;
    public BackendEnvironment withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}