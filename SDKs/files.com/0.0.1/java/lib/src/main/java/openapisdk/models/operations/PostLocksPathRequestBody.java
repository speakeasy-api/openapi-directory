package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLocksPathRequestBody {
    @SpeakeasyMetadata("multipartForm:name=allow_access_by_any_user")
    public Boolean allowAccessByAnyUser;
    public PostLocksPathRequestBody withAllowAccessByAnyUser(Boolean allowAccessByAnyUser) {
        this.allowAccessByAnyUser = allowAccessByAnyUser;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=exclusive")
    public Boolean exclusive;
    public PostLocksPathRequestBody withExclusive(Boolean exclusive) {
        this.exclusive = exclusive;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recursive")
    public String recursive;
    public PostLocksPathRequestBody withRecursive(String recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timeout")
    public Integer timeout;
    public PostLocksPathRequestBody withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}