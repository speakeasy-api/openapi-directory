package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_command")
    public String buildCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfile_path")
    public String dockerfilePath;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withDockerfilePath(String dockerfilePath) {
        this.dockerfilePath = dockerfilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_slug")
    public String environmentSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withEnvironmentSlug(String environmentSlug) {
        this.environmentSlug = environmentSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envs")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs[] envs;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withEnvs(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs[] envs) {
        this.envs = envs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit git;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withGit(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub github;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withGithub(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitlab")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab gitlab;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withGitlab(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab gitlab) {
        this.gitlab = gitlab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage image;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withImage(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_count")
    public Long instanceCount;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_size_slug")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum instanceSizeSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withInstanceSizeSlug(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum instanceSizeSlug) {
        this.instanceSizeSlug = instanceSizeSlug;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_command")
    public String runCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withRunCommand(String runCommand) {
        this.runCommand = runCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_dir")
    public String sourceDir;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
}