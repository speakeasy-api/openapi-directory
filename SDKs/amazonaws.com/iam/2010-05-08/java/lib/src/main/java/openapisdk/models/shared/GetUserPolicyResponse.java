package openapisdk.models.shared;



/**
 * GetUserPolicyResponse
 * Contains the response to a successful <a>GetUserPolicy</a> request. 
**/
public class GetUserPolicyResponse {
    public String policyDocument;
    public GetUserPolicyResponse withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    public String policyName;
    public GetUserPolicyResponse withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    public String userName;
    public GetUserPolicyResponse withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}