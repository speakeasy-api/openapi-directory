package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeLocationSmbRequest
 * DescribeLocationSmbRequest
**/
public class DescribeLocationSmbRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationSmbRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}