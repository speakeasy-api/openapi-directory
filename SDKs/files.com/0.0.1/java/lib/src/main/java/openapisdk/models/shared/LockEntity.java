package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LockEntity
 * List Locks by path
**/
public class LockEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_access_by_any_user")
    public Boolean allowAccessByAnyUser;
    public LockEntity withAllowAccessByAnyUser(Boolean allowAccessByAnyUser) {
        this.allowAccessByAnyUser = allowAccessByAnyUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("depth")
    public String depth;
    public LockEntity withDepth(String depth) {
        this.depth = depth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusive")
    public Boolean exclusive;
    public LockEntity withExclusive(Boolean exclusive) {
        this.exclusive = exclusive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public LockEntity withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public LockEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recursive")
    public Boolean recursive;
    public LockEntity withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public LockEntity withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Integer timeout;
    public LockEntity withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public LockEntity withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public LockEntity withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public LockEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public LockEntity withUsername(String username) {
        this.username = username;
        return this;
    }
}