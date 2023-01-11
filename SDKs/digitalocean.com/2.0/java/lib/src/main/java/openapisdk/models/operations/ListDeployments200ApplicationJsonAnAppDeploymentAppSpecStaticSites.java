package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_command")
    public String buildCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catchall_document")
    public String catchallDocument;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withCatchallDocument(String catchallDocument) {
        this.catchallDocument = catchallDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cors")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors cors;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withCors(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors cors) {
        this.cors = cors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerfile_path")
    public String dockerfilePath;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withDockerfilePath(String dockerfilePath) {
        this.dockerfilePath = dockerfilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_slug")
    public String environmentSlug;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withEnvironmentSlug(String environmentSlug) {
        this.environmentSlug = environmentSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envs")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs[] envs;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withEnvs(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs[] envs) {
        this.envs = envs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_document")
    public String errorDocument;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withErrorDocument(String errorDocument) {
        this.errorDocument = errorDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit git;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withGit(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub github;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withGithub(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitlab")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab gitlab;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withGitlab(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab gitlab) {
        this.gitlab = gitlab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage image;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withImage(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index_document")
    public String indexDocument;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withIndexDocument(String indexDocument) {
        this.indexDocument = indexDocument;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output_dir")
    public String outputDir;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withOutputDir(String outputDir) {
        this.outputDir = outputDir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[] routes;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withRoutes(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_command")
    public String runCommand;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withRunCommand(String runCommand) {
        this.runCommand = runCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_dir")
    public String sourceDir;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
}