package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_command")
    public String buildCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfile_path")
    public String dockerfilePath;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withDockerfilePath(String dockerfilePath) {
        this.dockerfilePath = dockerfilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_slug")
    public String environmentSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withEnvironmentSlug(String environmentSlug) {
        this.environmentSlug = environmentSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envs")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs[] envs;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withEnvs(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs[] envs) {
        this.envs = envs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit git;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withGit(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub github;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withGithub(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitlab")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab gitlab;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withGitlab(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab gitlab) {
        this.gitlab = gitlab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage image;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withImage(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_count")
    public Long instanceCount;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_size_slug")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum instanceSizeSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withInstanceSizeSlug(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum instanceSizeSlug) {
        this.instanceSizeSlug = instanceSizeSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum kind;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withKind(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_command")
    public String runCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withRunCommand(String runCommand) {
        this.runCommand = runCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_dir")
    public String sourceDir;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
}