package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionCacheBehaviors
 * Provides information about caching for the distribution.
**/
public class AwsCloudFrontDistributionCacheBehaviors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public AwsCloudFrontDistributionCacheBehavior[] items;
    public AwsCloudFrontDistributionCacheBehaviors withItems(AwsCloudFrontDistributionCacheBehavior[] items) {
        this.items = items;
        return this;
    }
}