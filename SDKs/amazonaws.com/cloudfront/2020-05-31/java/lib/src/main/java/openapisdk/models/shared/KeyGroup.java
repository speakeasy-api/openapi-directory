package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * KeyGroup
 * <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
**/
public class KeyGroup {
    public String id;
    public KeyGroup withId(String id) {
        this.id = id;
        return this;
    }
    public KeyGroupConfig keyGroupConfig;
    public KeyGroup withKeyGroupConfig(KeyGroupConfig keyGroupConfig) {
        this.keyGroupConfig = keyGroupConfig;
        return this;
    }
    public OffsetDateTime lastModifiedTime;
    public KeyGroup withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
}