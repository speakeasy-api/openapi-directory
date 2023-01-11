package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserRelationshipsOwnerAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public UserRelationshipsOwnerAccountData data;
    public UserRelationshipsOwnerAccount withData(UserRelationshipsOwnerAccountData data) {
        this.data = data;
        return this;
    }
}