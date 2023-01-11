package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrationsStartForAuthenticatedUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude")
    public MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[] exclude;
    public MigrationsStartForAuthenticatedUserRequestBody withExclude(MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude_attachments")
    public Boolean excludeAttachments;
    public MigrationsStartForAuthenticatedUserRequestBody withExcludeAttachments(Boolean excludeAttachments) {
        this.excludeAttachments = excludeAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lock_repositories")
    public Boolean lockRepositories;
    public MigrationsStartForAuthenticatedUserRequestBody withLockRepositories(Boolean lockRepositories) {
        this.lockRepositories = lockRepositories;
        return this;
    }
    @JsonProperty("repositories")
    public String[] repositories;
    public MigrationsStartForAuthenticatedUserRequestBody withRepositories(String[] repositories) {
        this.repositories = repositories;
        return this;
    }
}