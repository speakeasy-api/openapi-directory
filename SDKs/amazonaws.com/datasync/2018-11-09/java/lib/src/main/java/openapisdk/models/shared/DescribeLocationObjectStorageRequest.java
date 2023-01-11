package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeLocationObjectStorageRequest
 * DescribeLocationObjectStorageRequest
**/
public class DescribeLocationObjectStorageRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationObjectStorageRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}