package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeUserProfilesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamUserArns")
    public String[] iamUserArns;
    public DescribeUserProfilesRequest withIamUserArns(String[] iamUserArns) {
        this.iamUserArns = iamUserArns;
        return this;
    }
}