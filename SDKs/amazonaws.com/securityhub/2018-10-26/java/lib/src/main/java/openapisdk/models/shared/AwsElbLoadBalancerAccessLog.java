package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerAccessLog
 * Contains information about the access log configuration for the load balancer.
**/
public class AwsElbLoadBalancerAccessLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmitInterval")
    public Long emitInterval;
    public AwsElbLoadBalancerAccessLog withEmitInterval(Long emitInterval) {
        this.emitInterval = emitInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AwsElbLoadBalancerAccessLog withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public AwsElbLoadBalancerAccessLog withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketPrefix")
    public String s3BucketPrefix;
    public AwsElbLoadBalancerAccessLog withS3BucketPrefix(String s3BucketPrefix) {
        this.s3BucketPrefix = s3BucketPrefix;
        return this;
    }
}