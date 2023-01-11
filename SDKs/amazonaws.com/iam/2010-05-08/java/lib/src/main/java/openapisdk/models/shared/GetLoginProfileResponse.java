package openapisdk.models.shared;



/**
 * GetLoginProfileResponse
 * Contains the response to a successful <a>GetLoginProfile</a> request. 
**/
public class GetLoginProfileResponse {
    public LoginProfile loginProfile;
    public GetLoginProfileResponse withLoginProfile(LoginProfile loginProfile) {
        this.loginProfile = loginProfile;
        return this;
    }
}