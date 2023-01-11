package openapisdk.models.shared;



/**
 * OriginList
 * <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
**/
public class OriginList {
    public Long connectionAttempts;
    public OriginList withConnectionAttempts(Long connectionAttempts) {
        this.connectionAttempts = connectionAttempts;
        return this;
    }
    public Long connectionTimeout;
    public OriginList withConnectionTimeout(Long connectionTimeout) {
        this.connectionTimeout = connectionTimeout;
        return this;
    }
    public CustomHeaders customHeaders;
    public OriginList withCustomHeaders(CustomHeaders customHeaders) {
        this.customHeaders = customHeaders;
        return this;
    }
    public CustomOriginConfig customOriginConfig;
    public OriginList withCustomOriginConfig(CustomOriginConfig customOriginConfig) {
        this.customOriginConfig = customOriginConfig;
        return this;
    }
    public String domainName;
    public OriginList withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    public String id;
    public OriginList withId(String id) {
        this.id = id;
        return this;
    }
    public String originPath;
    public OriginList withOriginPath(String originPath) {
        this.originPath = originPath;
        return this;
    }
    public OriginShield originShield;
    public OriginList withOriginShield(OriginShield originShield) {
        this.originShield = originShield;
        return this;
    }
    public S3OriginConfig s3OriginConfig;
    public OriginList withS3OriginConfig(S3OriginConfig s3OriginConfig) {
        this.s3OriginConfig = s3OriginConfig;
        return this;
    }
}