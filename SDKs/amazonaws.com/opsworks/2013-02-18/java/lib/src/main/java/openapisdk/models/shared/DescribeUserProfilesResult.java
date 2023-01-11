package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeUserProfilesResult
 * Contains the response to a <code>DescribeUserProfiles</code> request.
**/
public class DescribeUserProfilesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserProfiles")
    public UserProfile[] userProfiles;
    public DescribeUserProfilesResult withUserProfiles(UserProfile[] userProfiles) {
        this.userProfiles = userProfiles;
        return this;
    }
}