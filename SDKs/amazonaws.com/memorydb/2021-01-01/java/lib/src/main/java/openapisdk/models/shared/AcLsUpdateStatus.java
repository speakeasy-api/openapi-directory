package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcLsUpdateStatus
 * The status of the ACL update
**/
public class AcLsUpdateStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ACLToApply")
    public String aclToApply;
    public AcLsUpdateStatus withAclToApply(String aclToApply) {
        this.aclToApply = aclToApply;
        return this;
    }
}