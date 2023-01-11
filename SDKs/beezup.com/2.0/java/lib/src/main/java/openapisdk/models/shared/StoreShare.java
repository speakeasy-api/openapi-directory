package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StoreShare {
    @JsonProperty("links")
    public StoreShareLinks links;
    public StoreShare withLinks(StoreShareLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public StoreShare withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonProperty("userRole")
    public StoreUserRoleEnum userRole;
    public StoreShare withUserRole(StoreUserRoleEnum userRole) {
        this.userRole = userRole;
        return this;
    }
}