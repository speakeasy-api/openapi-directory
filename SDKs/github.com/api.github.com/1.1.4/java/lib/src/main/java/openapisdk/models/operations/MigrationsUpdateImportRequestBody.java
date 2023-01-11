package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrationsUpdateImportRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tfvc_project")
    public String tfvcProject;
    public MigrationsUpdateImportRequestBody withTfvcProject(String tfvcProject) {
        this.tfvcProject = tfvcProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs")
    public String vcs;
    public MigrationsUpdateImportRequestBody withVcs(String vcs) {
        this.vcs = vcs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs_password")
    public String vcsPassword;
    public MigrationsUpdateImportRequestBody withVcsPassword(String vcsPassword) {
        this.vcsPassword = vcsPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs_username")
    public String vcsUsername;
    public MigrationsUpdateImportRequestBody withVcsUsername(String vcsUsername) {
        this.vcsUsername = vcsUsername;
        return this;
    }
}