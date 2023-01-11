package openapisdk.models.shared;



/**
 * GetContextKeysForPolicyResponse
 * Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. 
**/
public class GetContextKeysForPolicyResponse {
    public String[] contextKeyNames;
    public GetContextKeysForPolicyResponse withContextKeyNames(String[] contextKeyNames) {
        this.contextKeyNames = contextKeyNames;
        return this;
    }
}