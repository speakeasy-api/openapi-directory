package openapisdk.models.shared;



/**
 * CustomOriginConfig
 * A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.
**/
public class CustomOriginConfig {
    public Long httpPort;
    public CustomOriginConfig withHttpPort(Long httpPort) {
        this.httpPort = httpPort;
        return this;
    }
    public Long httpsPort;
    public CustomOriginConfig withHttpsPort(Long httpsPort) {
        this.httpsPort = httpsPort;
        return this;
    }
    public Long originKeepaliveTimeout;
    public CustomOriginConfig withOriginKeepaliveTimeout(Long originKeepaliveTimeout) {
        this.originKeepaliveTimeout = originKeepaliveTimeout;
        return this;
    }
    public OriginProtocolPolicyEnum originProtocolPolicy;
    public CustomOriginConfig withOriginProtocolPolicy(OriginProtocolPolicyEnum originProtocolPolicy) {
        this.originProtocolPolicy = originProtocolPolicy;
        return this;
    }
    public Long originReadTimeout;
    public CustomOriginConfig withOriginReadTimeout(Long originReadTimeout) {
        this.originReadTimeout = originReadTimeout;
        return this;
    }
    public OriginSslProtocols originSslProtocols;
    public CustomOriginConfig withOriginSslProtocols(OriginSslProtocols originSslProtocols) {
        this.originSslProtocols = originSslProtocols;
        return this;
    }
}