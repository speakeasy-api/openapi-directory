package openapisdk.models.shared;



/**
 * UpdateServiceAccessPoliciesResponse
 * The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.
**/
public class UpdateServiceAccessPoliciesResponse {
    public AccessPoliciesStatus accessPolicies;
    public UpdateServiceAccessPoliciesResponse withAccessPolicies(AccessPoliciesStatus accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
}