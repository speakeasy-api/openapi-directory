package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOriginGroups
 * Provides information about origin groups that are associated with the distribution.
**/
public class AwsCloudFrontDistributionOriginGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public AwsCloudFrontDistributionOriginGroup[] items;
    public AwsCloudFrontDistributionOriginGroups withItems(AwsCloudFrontDistributionOriginGroup[] items) {
        this.items = items;
        return this;
    }
}