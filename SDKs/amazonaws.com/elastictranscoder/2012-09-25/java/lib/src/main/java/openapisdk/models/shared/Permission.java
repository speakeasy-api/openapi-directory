package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Permission
 * The <code>Permission</code> structure.
**/
public class Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Access")
    public String[] access;
    public Permission withAccess(String[] access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Grantee")
    public String grantee;
    public Permission withGrantee(String grantee) {
        this.grantee = grantee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GranteeType")
    public String granteeType;
    public Permission withGranteeType(String granteeType) {
        this.granteeType = granteeType;
        return this;
    }
}