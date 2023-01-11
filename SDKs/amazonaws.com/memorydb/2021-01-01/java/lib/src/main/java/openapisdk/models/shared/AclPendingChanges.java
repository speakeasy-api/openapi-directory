package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AclPendingChanges
 * Returns the updates being applied to the ACL.
**/
public class AclPendingChanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserNamesToAdd")
    public String[] userNamesToAdd;
    public AclPendingChanges withUserNamesToAdd(String[] userNamesToAdd) {
        this.userNamesToAdd = userNamesToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserNamesToRemove")
    public String[] userNamesToRemove;
    public AclPendingChanges withUserNamesToRemove(String[] userNamesToRemove) {
        this.userNamesToRemove = userNamesToRemove;
        return this;
    }
}