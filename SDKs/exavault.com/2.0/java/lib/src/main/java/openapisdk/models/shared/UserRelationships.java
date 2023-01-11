package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRelationships
 * Home resource and owner account relationship data for the user. 
**/
public class UserRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeResource")
    public UserRelationshipsHomeResource homeResource;
    public UserRelationships withHomeResource(UserRelationshipsHomeResource homeResource) {
        this.homeResource = homeResource;
        return this;
    }
    @JsonProperty("ownerAccount")
    public UserRelationshipsOwnerAccount ownerAccount;
    public UserRelationships withOwnerAccount(UserRelationshipsOwnerAccount ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
}