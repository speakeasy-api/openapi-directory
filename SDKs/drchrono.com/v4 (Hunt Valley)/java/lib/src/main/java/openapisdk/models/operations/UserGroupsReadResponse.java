package openapisdk.models.operations;



public class UserGroupsReadResponse {
    public String contentType;
    public UserGroupsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserGroupsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserProfilesGroup userProfilesGroup;
    public UserGroupsReadResponse withUserProfilesGroup(openapisdk.models.shared.UserProfilesGroup userProfilesGroup) {
        this.userProfilesGroup = userProfilesGroup;
        return this;
    }
}