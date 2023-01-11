package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProfileTimesResponse
 * The structure representing the listProfileTimesResponse.
**/
public class ListProfileTimesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListProfileTimesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("profileTimes")
    public ProfileTime[] profileTimes;
    public ListProfileTimesResponse withProfileTimes(ProfileTime[] profileTimes) {
        this.profileTimes = profileTimes;
        return this;
    }
}