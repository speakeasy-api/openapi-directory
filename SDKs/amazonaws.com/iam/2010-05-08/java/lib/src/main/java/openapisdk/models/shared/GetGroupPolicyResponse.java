package openapisdk.models.shared;



/**
 * GetGroupPolicyResponse
 * Contains the response to a successful <a>GetGroupPolicy</a> request. 
**/
public class GetGroupPolicyResponse {
    public String groupName;
    public GetGroupPolicyResponse withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    public String policyDocument;
    public GetGroupPolicyResponse withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    public String policyName;
    public GetGroupPolicyResponse withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}