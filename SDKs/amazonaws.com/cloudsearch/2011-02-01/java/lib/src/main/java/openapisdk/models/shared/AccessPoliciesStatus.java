package openapisdk.models.shared;



/**
 * AccessPoliciesStatus
 * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
**/
public class AccessPoliciesStatus {
    public String options;
    public AccessPoliciesStatus withOptions(String options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public AccessPoliciesStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}