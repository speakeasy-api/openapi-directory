package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeLocationS3Request
 * DescribeLocationS3Request
**/
public class DescribeLocationS3Request {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationS3Request withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}