package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketWebsiteConfiguration
 * Website parameters for the S3 bucket.
**/
public class AwsS3BucketWebsiteConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDocument")
    public String errorDocument;
    public AwsS3BucketWebsiteConfiguration withErrorDocument(String errorDocument) {
        this.errorDocument = errorDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexDocumentSuffix")
    public String indexDocumentSuffix;
    public AwsS3BucketWebsiteConfiguration withIndexDocumentSuffix(String indexDocumentSuffix) {
        this.indexDocumentSuffix = indexDocumentSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedirectAllRequestsTo")
    public AwsS3BucketWebsiteConfigurationRedirectTo redirectAllRequestsTo;
    public AwsS3BucketWebsiteConfiguration withRedirectAllRequestsTo(AwsS3BucketWebsiteConfigurationRedirectTo redirectAllRequestsTo) {
        this.redirectAllRequestsTo = redirectAllRequestsTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingRules")
    public AwsS3BucketWebsiteConfigurationRoutingRule[] routingRules;
    public AwsS3BucketWebsiteConfiguration withRoutingRules(AwsS3BucketWebsiteConfigurationRoutingRule[] routingRules) {
        this.routingRules = routingRules;
        return this;
    }
}