package openapisdk.models.shared;



/**
 * DescribeServiceAccessPoliciesResponse
 * A response message that contains the access policies for a domain.
**/
public class DescribeServiceAccessPoliciesResponse {
    public AccessPoliciesStatus accessPolicies;
    public DescribeServiceAccessPoliciesResponse withAccessPolicies(AccessPoliciesStatus accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
}