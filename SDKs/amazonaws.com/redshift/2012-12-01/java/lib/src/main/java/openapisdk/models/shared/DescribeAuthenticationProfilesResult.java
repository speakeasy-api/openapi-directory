package openapisdk.models.shared;



public class DescribeAuthenticationProfilesResult {
    public AuthenticationProfile[] authenticationProfiles;
    public DescribeAuthenticationProfilesResult withAuthenticationProfiles(AuthenticationProfile[] authenticationProfiles) {
        this.authenticationProfiles = authenticationProfiles;
        return this;
    }
}