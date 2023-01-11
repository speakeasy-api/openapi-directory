package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOrigins
 * A complex type that contains information about origins and origin groups for this distribution.
**/
public class AwsCloudFrontDistributionOrigins {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public AwsCloudFrontDistributionOriginItem[] items;
    public AwsCloudFrontDistributionOrigins withItems(AwsCloudFrontDistributionOriginItem[] items) {
        this.items = items;
        return this;
    }
}