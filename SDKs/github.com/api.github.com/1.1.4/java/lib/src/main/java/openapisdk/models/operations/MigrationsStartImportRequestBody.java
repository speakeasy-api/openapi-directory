package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrationsStartImportRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tfvc_project")
    public String tfvcProject;
    public MigrationsStartImportRequestBody withTfvcProject(String tfvcProject) {
        this.tfvcProject = tfvcProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs")
    public MigrationsStartImportRequestBodyVcsEnum vcs;
    public MigrationsStartImportRequestBody withVcs(MigrationsStartImportRequestBodyVcsEnum vcs) {
        this.vcs = vcs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs_password")
    public String vcsPassword;
    public MigrationsStartImportRequestBody withVcsPassword(String vcsPassword) {
        this.vcsPassword = vcsPassword;
        return this;
    }
    @JsonProperty("vcs_url")
    public String vcsUrl;
    public MigrationsStartImportRequestBody withVcsUrl(String vcsUrl) {
        this.vcsUrl = vcsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs_username")
    public String vcsUsername;
    public MigrationsStartImportRequestBody withVcsUsername(String vcsUsername) {
        this.vcsUsername = vcsUsername;
        return this;
    }
}