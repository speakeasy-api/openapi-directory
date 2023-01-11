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
    @JsonProperty("actions")
    public String[] actions;
    public ApiOverview withActions(String[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public String[] api;
    public ApiOverview withApi(String[] api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public String[] git;
    public ApiOverview withGit(String[] git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hooks")
    public String[] hooks;
    public ApiOverview withHooks(String[] hooks) {
        this.hooks = hooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importer")
    public String[] importer;
    public ApiOverview withImporter(String[] importer) {
        this.importer = importer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public String[] pages;
    public ApiOverview withPages(String[] pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_key_fingerprints")
    public ApiOverviewSshKeyFingerprints sshKeyFingerprints;
    public ApiOverview withSshKeyFingerprints(ApiOverviewSshKeyFingerprints sshKeyFingerprints) {
        this.sshKeyFingerprints = sshKeyFingerprints;
        return this;
    }
    @JsonProperty("verifiable_password_authentication")
    public Boolean verifiablePasswordAuthentication;
    public ApiOverview withVerifiablePasswordAuthentication(Boolean verifiablePasswordAuthentication) {
        this.verifiablePasswordAuthentication = verifiablePasswordAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("web")
    public String[] web;
    public ApiOverview withWeb(String[] web) {
        this.web = web;
        return this;
    }
}