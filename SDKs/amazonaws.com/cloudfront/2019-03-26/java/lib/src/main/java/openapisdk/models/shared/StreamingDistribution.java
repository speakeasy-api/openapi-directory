package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * StreamingDistribution
 * A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
**/
public class StreamingDistribution {
    public String arn;
    public StreamingDistribution withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public ActiveTrustedSigners activeTrustedSigners;
    public StreamingDistribution withActiveTrustedSigners(ActiveTrustedSigners activeTrustedSigners) {
        this.activeTrustedSigners = activeTrustedSigners;
        return this;
    }
    public String domainName;
    public StreamingDistribution withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    public String id;
    public StreamingDistribution withId(String id) {
        this.id = id;
        return this;
    }
    public OffsetDateTime lastModifiedTime;
    public StreamingDistribution withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    public String status;
    public StreamingDistribution withStatus(String status) {
        this.status = status;
        return this;
    }
    public StreamingDistributionConfig streamingDistributionConfig;
    public StreamingDistribution withStreamingDistributionConfig(StreamingDistributionConfig streamingDistributionConfig) {
        this.streamingDistributionConfig = streamingDistributionConfig;
        return this;
    }
}