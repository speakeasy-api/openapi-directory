package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
 * The status codes that cause an origin group to fail over.
**/
public class AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public Long[] items;
    public AwsCloudFrontDistributionOriginGroupFailoverStatusCodes withItems(Long[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Long quantity;
    public AwsCloudFrontDistributionOriginGroupFailoverStatusCodes withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}