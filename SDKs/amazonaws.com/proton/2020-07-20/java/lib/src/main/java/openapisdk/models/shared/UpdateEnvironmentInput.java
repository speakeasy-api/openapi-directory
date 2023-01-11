package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironmentInput {
    @JsonProperty("deploymentType")
    public DeploymentUpdateTypeEnum deploymentType;
    public UpdateEnvironmentInput withDeploymentType(DeploymentUpdateTypeEnum deploymentType) {
        this.deploymentType = deploymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateEnvironmentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountConnectionId")
    public String environmentAccountConnectionId;
    public UpdateEnvironmentInput withEnvironmentAccountConnectionId(String environmentAccountConnectionId) {
        this.environmentAccountConnectionId = environmentAccountConnectionId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateEnvironmentInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protonServiceRoleArn")
    public String protonServiceRoleArn;
    public UpdateEnvironmentInput withProtonServiceRoleArn(String protonServiceRoleArn) {
        this.protonServiceRoleArn = protonServiceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public String spec;
    public UpdateEnvironmentInput withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateMajorVersion")
    public String templateMajorVersion;
    public UpdateEnvironmentInput withTemplateMajorVersion(String templateMajorVersion) {
        this.templateMajorVersion = templateMajorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateMinorVersion")
    public String templateMinorVersion;
    public UpdateEnvironmentInput withTemplateMinorVersion(String templateMinorVersion) {
        this.templateMinorVersion = templateMinorVersion;
        return this;
    }
}