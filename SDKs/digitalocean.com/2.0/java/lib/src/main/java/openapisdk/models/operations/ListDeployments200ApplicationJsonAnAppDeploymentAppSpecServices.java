package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_command")
    public String buildCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cors")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors cors;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withCors(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors cors) {
        this.cors = cors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfile_path")
    public String dockerfilePath;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withDockerfilePath(String dockerfilePath) {
        this.dockerfilePath = dockerfilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_slug")
    public String environmentSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withEnvironmentSlug(String environmentSlug) {
        this.environmentSlug = environmentSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envs")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs[] envs;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withEnvs(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs[] envs) {
        this.envs = envs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit git;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withGit(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub github;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withGithub(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitlab")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab gitlab;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withGitlab(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab gitlab) {
        this.gitlab = gitlab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck healthCheck;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withHealthCheck(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_port")
    public Long httpPort;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withHttpPort(Long httpPort) {
        this.httpPort = httpPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage image;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withImage(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_count")
    public Long instanceCount;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_size_slug")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum instanceSizeSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withInstanceSizeSlug(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum instanceSizeSlug) {
        this.instanceSizeSlug = instanceSizeSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_ports")
    public Long[] internalPorts;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withInternalPorts(Long[] internalPorts) {
        this.internalPorts = internalPorts;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[] routes;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withRoutes(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_command")
    public String runCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withRunCommand(String runCommand) {
        this.runCommand = runCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_dir")
    public String sourceDir;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
}