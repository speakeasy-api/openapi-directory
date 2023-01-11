package openapisdk.models.shared;



/**
 * GetCallerIdentityResponse
 * Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
**/
public class GetCallerIdentityResponse {
    public String account;
    public GetCallerIdentityResponse withAccount(String account) {
        this.account = account;
        return this;
    }
    public String arn;
    public GetCallerIdentityResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String userId;
    public GetCallerIdentityResponse withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}