package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeHsmRequest
 * Contains the inputs for the <a>DescribeHsm</a> operation.
**/
public class DescribeHsmRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmArn")
    public String hsmArn;
    public DescribeHsmRequest withHsmArn(String hsmArn) {
        this.hsmArn = hsmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmSerialNumber")
    public String hsmSerialNumber;
    public DescribeHsmRequest withHsmSerialNumber(String hsmSerialNumber) {
        this.hsmSerialNumber = hsmSerialNumber;
        return this;
    }
}