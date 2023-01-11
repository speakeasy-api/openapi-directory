package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_command")
    public String buildCommand;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfile_path")
    public String dockerfilePath;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withDockerfilePath(String dockerfilePath) {
        this.dockerfilePath = dockerfilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_slug")
    public String environmentSlug;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withEnvironmentSlug(String environmentSlug) {
        this.environmentSlug = environmentSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envs")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs[] envs;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withEnvs(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs[] envs) {
        this.envs = envs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit git;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withGit(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub github;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withGithub(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitlab")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab gitlab;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withGitlab(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab gitlab) {
        this.gitlab = gitlab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage image;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withImage(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_count")
    public Long instanceCount;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_size_slug")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum instanceSizeSlug;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withInstanceSizeSlug(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum instanceSizeSlug) {
        this.instanceSizeSlug = instanceSizeSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum kind;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withKind(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_command")
    public String runCommand;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withRunCommand(String runCommand) {
        this.runCommand = runCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_dir")
    public String sourceDir;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
}