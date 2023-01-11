package openapisdk.models.shared;



/**
 * UserAuthConfigInfo
 * Returns the details of authentication used by a proxy to log in as a specific database user.
**/
public class UserAuthConfigInfo {
    public AuthSchemeEnum authScheme;
    public UserAuthConfigInfo withAuthScheme(AuthSchemeEnum authScheme) {
        this.authScheme = authScheme;
        return this;
    }
    public String description;
    public UserAuthConfigInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    public IamAuthModeEnum iamAuth;
    public UserAuthConfigInfo withIamAuth(IamAuthModeEnum iamAuth) {
        this.iamAuth = iamAuth;
        return this;
    }
    public String secretArn;
    public UserAuthConfigInfo withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
    public String userName;
    public UserAuthConfigInfo withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}