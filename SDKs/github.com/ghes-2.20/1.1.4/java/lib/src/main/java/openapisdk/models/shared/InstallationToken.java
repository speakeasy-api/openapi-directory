package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstallationToken
 * Authentication token for a GitHub App installed on a user or org.
**/
public class InstallationToken {
    @JsonProperty("expires_at")
    public String expiresAt;
    public InstallationToken withExpiresAt(String expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_multiple_single_files")
    public Boolean hasMultipleSingleFiles;
    public InstallationToken withHasMultipleSingleFiles(Boolean hasMultipleSingleFiles) {
        this.hasMultipleSingleFiles = hasMultipleSingleFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public InstallationTokenPermissions permissions;
    public InstallationToken withPermissions(InstallationTokenPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public Repository[] repositories;
    public InstallationToken withRepositories(Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_selection")
    public InstallationTokenRepositorySelectionEnum repositorySelection;
    public InstallationToken withRepositorySelection(InstallationTokenRepositorySelectionEnum repositorySelection) {
        this.repositorySelection = repositorySelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file")
    public String singleFile;
    public InstallationToken withSingleFile(String singleFile) {
        this.singleFile = singleFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file_paths")
    public String[] singleFilePaths;
    public InstallationToken withSingleFilePaths(String[] singleFilePaths) {
        this.singleFilePaths = singleFilePaths;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public InstallationToken withToken(String token) {
        this.token = token;
        return this;
    }
}