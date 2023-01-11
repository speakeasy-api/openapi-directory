package openapisdk.models.shared;



/**
 * ListPoliciesGrantingServiceAccessEntry
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
**/
public class ListPoliciesGrantingServiceAccessEntry {
    public PolicyGrantingServiceAccess[] policies;
    public ListPoliciesGrantingServiceAccessEntry withPolicies(PolicyGrantingServiceAccess[] policies) {
        this.policies = policies;
        return this;
    }
    public String serviceNamespace;
    public ListPoliciesGrantingServiceAccessEntry withServiceNamespace(String serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
}