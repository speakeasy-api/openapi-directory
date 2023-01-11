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
 * AuthenticationToken
 * Authentication Token
**/
public class AuthenticationToken {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public AuthenticationToken withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public java.util.Map<String, Object> permissions;
    public AuthenticationToken withPermissions(java.util.Map<String, Object> permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public Repository[] repositories;
    public AuthenticationToken withRepositories(Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_selection")
    public AuthenticationTokenRepositorySelectionEnum repositorySelection;
    public AuthenticationToken withRepositorySelection(AuthenticationTokenRepositorySelectionEnum repositorySelection) {
        this.repositorySelection = repositorySelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file")
    public String singleFile;
    public AuthenticationToken withSingleFile(String singleFile) {
        this.singleFile = singleFile;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public AuthenticationToken withToken(String token) {
        this.token = token;
        return this;
    }
}