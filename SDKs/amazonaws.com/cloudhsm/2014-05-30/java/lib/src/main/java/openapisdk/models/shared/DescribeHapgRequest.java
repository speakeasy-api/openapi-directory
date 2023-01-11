package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeHapgRequest
 * Contains the inputs for the <a>DescribeHapg</a> action.
**/
public class DescribeHapgRequest {
    @JsonProperty("HapgArn")
    public String hapgArn;
    public DescribeHapgRequest withHapgArn(String hapgArn) {
        this.hapgArn = hapgArn;
        return this;
    }
}