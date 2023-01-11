package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RepositoryMetadata
 * Information about a repository.
**/
public class RepositoryMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public RepositoryMetadata withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RepositoryMetadata withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloneUrlHttp")
    public String cloneUrlHttp;
    public RepositoryMetadata withCloneUrlHttp(String cloneUrlHttp) {
        this.cloneUrlHttp = cloneUrlHttp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloneUrlSsh")
    public String cloneUrlSsh;
    public RepositoryMetadata withCloneUrlSsh(String cloneUrlSsh) {
        this.cloneUrlSsh = cloneUrlSsh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public RepositoryMetadata withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultBranch")
    public String defaultBranch;
    public RepositoryMetadata withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public RepositoryMetadata withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryDescription")
    public String repositoryDescription;
    public RepositoryMetadata withRepositoryDescription(String repositoryDescription) {
        this.repositoryDescription = repositoryDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryId")
    public String repositoryId;
    public RepositoryMetadata withRepositoryId(String repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public RepositoryMetadata withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}