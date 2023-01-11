package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserLovIndexLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lists")
    public java.util.Map<String, LinksGetUserListOfValuesLink> lists;
    public UserLovIndexLinks withLists(java.util.Map<String, LinksGetUserListOfValuesLink> lists) {
        this.lists = lists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetUserLovIndexLink self;
    public UserLovIndexLinks withSelf(LinksGetUserLovIndexLink self) {
        this.self = self;
        return this;
    }
}