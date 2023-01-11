package openapisdk.models.shared;



/**
 * DescribeServiceAccessPoliciesResponse
 * The result of a <code>DescribeServiceAccessPolicies</code> request.
**/
public class DescribeServiceAccessPoliciesResponse {
    public AccessPoliciesStatus accessPolicies;
    public DescribeServiceAccessPoliciesResponse withAccessPolicies(AccessPoliciesStatus accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
}