package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionDefaultCacheBehavior
 * Contains information about the default cache configuration for the distribution.
**/
public class AwsCloudFrontDistributionDefaultCacheBehavior {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViewerProtocolPolicy")
    public String viewerProtocolPolicy;
    public AwsCloudFrontDistributionDefaultCacheBehavior withViewerProtocolPolicy(String viewerProtocolPolicy) {
        this.viewerProtocolPolicy = viewerProtocolPolicy;
        return this;
    }
}