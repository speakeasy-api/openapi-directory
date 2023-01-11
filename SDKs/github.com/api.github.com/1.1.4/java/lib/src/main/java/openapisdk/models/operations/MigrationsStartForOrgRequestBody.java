package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrationsStartForOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude")
    public String[] exclude;
    public MigrationsStartForOrgRequestBody withExclude(String[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude_attachments")
    public Boolean excludeAttachments;
    public MigrationsStartForOrgRequestBody withExcludeAttachments(Boolean excludeAttachments) {
        this.excludeAttachments = excludeAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lock_repositories")
    public Boolean lockRepositories;
    public MigrationsStartForOrgRequestBody withLockRepositories(Boolean lockRepositories) {
        this.lockRepositories = lockRepositories;
        return this;
    }
    @JsonProperty("repositories")
    public String[] repositories;
    public MigrationsStartForOrgRequestBody withRepositories(String[] repositories) {
        this.repositories = repositories;
        return this;
    }
}