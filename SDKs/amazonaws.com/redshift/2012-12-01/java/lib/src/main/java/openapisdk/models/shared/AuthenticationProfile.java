package openapisdk.models.shared;



/**
 * AuthenticationProfile
 * Describes an authentication profile.
**/
public class AuthenticationProfile {
    public String authenticationProfileContent;
    public AuthenticationProfile withAuthenticationProfileContent(String authenticationProfileContent) {
        this.authenticationProfileContent = authenticationProfileContent;
        return this;
    }
    public String authenticationProfileName;
    public AuthenticationProfile withAuthenticationProfileName(String authenticationProfileName) {
        this.authenticationProfileName = authenticationProfileName;
        return this;
    }
}