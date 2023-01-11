package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiOverview
 * Api Overview
**/
public class ApiOverview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependabot")
    public String[] dependabot;
    public ApiOverview withDependabot(String[] dependabot) {
        this.dependabot = dependabot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github_services_sha")
    public String githubServicesSha;
    public ApiOverview withGithubServicesSha(String githubServicesSha) {
        this.githubServicesSha = githubServicesSha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installed_version")
    public String installedVersion;
    public ApiOverview withInstalledVersion(String installedVersion) {
        this.installedVersion = installedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public String[] packages;
    public ApiOverview withPackages(String[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonProperty("verifiable_password_authentication")
    public Boolean verifiablePasswordAuthentication;
    public ApiOverview withVerifiablePasswordAuthentication(Boolean verifiablePasswordAuthentication) {
        this.verifiablePasswordAuthentication = verifiablePasswordAuthentication;
        return this;
    }
}