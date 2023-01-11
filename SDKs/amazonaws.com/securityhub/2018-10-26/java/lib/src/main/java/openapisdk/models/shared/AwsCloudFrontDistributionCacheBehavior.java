package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionCacheBehavior
 * Information about a cache behavior for the distribution.
**/
public class AwsCloudFrontDistributionCacheBehavior {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViewerProtocolPolicy")
    public String viewerProtocolPolicy;
    public AwsCloudFrontDistributionCacheBehavior withViewerProtocolPolicy(String viewerProtocolPolicy) {
        this.viewerProtocolPolicy = viewerProtocolPolicy;
        return this;
    }
}