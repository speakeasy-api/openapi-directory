package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOriginGroupFailover
 * Provides information about when an origin group fails over.
**/
public class AwsCloudFrontDistributionOriginGroupFailover {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusCodes")
    public AwsCloudFrontDistributionOriginGroupFailoverStatusCodes statusCodes;
    public AwsCloudFrontDistributionOriginGroupFailover withStatusCodes(AwsCloudFrontDistributionOriginGroupFailoverStatusCodes statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
}