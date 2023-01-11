package openapisdk.models.shared;



/**
 * UpdateServiceAccessPoliciesResponse
 * A response message that contains the status of updated access policies.
**/
public class UpdateServiceAccessPoliciesResponse {
    public AccessPoliciesStatus accessPolicies;
    public UpdateServiceAccessPoliciesResponse withAccessPolicies(AccessPoliciesStatus accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
}