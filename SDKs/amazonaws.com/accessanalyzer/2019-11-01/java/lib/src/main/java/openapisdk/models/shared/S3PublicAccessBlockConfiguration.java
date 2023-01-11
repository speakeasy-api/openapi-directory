package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3PublicAccessBlockConfiguration
 * The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>. 
**/
public class S3PublicAccessBlockConfiguration {
    @JsonProperty("ignorePublicAcls")
    public Boolean ignorePublicAcls;
    public S3PublicAccessBlockConfiguration withIgnorePublicAcls(Boolean ignorePublicAcls) {
        this.ignorePublicAcls = ignorePublicAcls;
        return this;
    }
    @JsonProperty("restrictPublicBuckets")
    public Boolean restrictPublicBuckets;
    public S3PublicAccessBlockConfiguration withRestrictPublicBuckets(Boolean restrictPublicBuckets) {
        this.restrictPublicBuckets = restrictPublicBuckets;
        return this;
    }
}