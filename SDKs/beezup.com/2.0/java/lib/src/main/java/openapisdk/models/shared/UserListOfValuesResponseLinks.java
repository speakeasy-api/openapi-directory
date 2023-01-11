package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserListOfValuesResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetUserListOfValuesLink self;
    public UserListOfValuesResponseLinks withSelf(LinksGetUserListOfValuesLink self) {
        this.self = self;
        return this;
    }
}