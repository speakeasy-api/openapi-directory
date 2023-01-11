package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_command")
    public String buildCommand;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cors")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors cors;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withCors(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors cors) {
        this.cors = cors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfile_path")
    public String dockerfilePath;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withDockerfilePath(String dockerfilePath) {
        this.dockerfilePath = dockerfilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_slug")
    public String environmentSlug;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withEnvironmentSlug(String environmentSlug) {
        this.environmentSlug = environmentSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envs")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs[] envs;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withEnvs(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs[] envs) {
        this.envs = envs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit git;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withGit(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub github;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withGithub(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitlab")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab gitlab;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withGitlab(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab gitlab) {
        this.gitlab = gitlab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck healthCheck;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withHealthCheck(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_port")
    public Long httpPort;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withHttpPort(Long httpPort) {
        this.httpPort = httpPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage image;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withImage(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_count")
    public Long instanceCount;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_size_slug")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum instanceSizeSlug;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withInstanceSizeSlug(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum instanceSizeSlug) {
        this.instanceSizeSlug = instanceSizeSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_ports")
    public Long[] internalPorts;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withInternalPorts(Long[] internalPorts) {
        this.internalPorts = internalPorts;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[] routes;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withRoutes(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_command")
    public String runCommand;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withRunCommand(String runCommand) {
        this.runCommand = runCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_dir")
    public String sourceDir;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
}