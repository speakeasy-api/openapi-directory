package openapisdk.models.shared;



/**
 * ListIdentityPoliciesResponse
 * A list of names of sending authorization policies that apply to an identity.
**/
public class ListIdentityPoliciesResponse {
    public String[] policyNames;
    public ListIdentityPoliciesResponse withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}