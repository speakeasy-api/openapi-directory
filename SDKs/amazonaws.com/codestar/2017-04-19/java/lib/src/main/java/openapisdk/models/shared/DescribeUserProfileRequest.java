package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserProfileRequest {
    @JsonProperty("userArn")
    public String userArn;
    public DescribeUserProfileRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}