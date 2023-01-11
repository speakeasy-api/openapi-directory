package openapisdk.models.shared;



/**
 * PolicyDetail
 * <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
public class PolicyDetail {
    public String policyDocument;
    public PolicyDetail withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    public String policyName;
    public PolicyDetail withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}