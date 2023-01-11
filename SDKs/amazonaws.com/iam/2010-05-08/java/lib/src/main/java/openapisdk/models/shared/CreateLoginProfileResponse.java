package openapisdk.models.shared;



/**
 * CreateLoginProfileResponse
 * Contains the response to a successful <a>CreateLoginProfile</a> request. 
**/
public class CreateLoginProfileResponse {
    public LoginProfile loginProfile;
    public CreateLoginProfileResponse withLoginProfile(LoginProfile loginProfile) {
        this.loginProfile = loginProfile;
        return this;
    }
}