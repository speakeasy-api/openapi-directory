package openapisdk.models.shared;



/**
 * AccessPoliciesStatus
 * The configured access rules for the domain's document and search endpoints, and the current status of those rules.
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