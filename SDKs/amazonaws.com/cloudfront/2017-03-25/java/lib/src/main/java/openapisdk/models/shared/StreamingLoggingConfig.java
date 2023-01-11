package openapisdk.models.shared;



/**
 * StreamingLoggingConfig
 * A complex type that controls whether access logs are written for this streaming distribution.
**/
public class StreamingLoggingConfig {
    public String bucket;
    public StreamingLoggingConfig withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    public Boolean enabled;
    public StreamingLoggingConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public String prefix;
    public StreamingLoggingConfig withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}