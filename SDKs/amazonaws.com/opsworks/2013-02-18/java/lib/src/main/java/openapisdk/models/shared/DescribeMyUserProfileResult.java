package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeMyUserProfileResult
 * Contains the response to a <code>DescribeMyUserProfile</code> request.
**/
public class DescribeMyUserProfileResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserProfile")
    public SelfUserProfile userProfile;
    public DescribeMyUserProfileResult withUserProfile(SelfUserProfile userProfile) {
        this.userProfile = userProfile;
        return this;
    }
}