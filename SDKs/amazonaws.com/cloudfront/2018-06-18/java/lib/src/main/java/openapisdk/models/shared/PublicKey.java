package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * PublicKey
 * A complex data type of public keys you add to CloudFront to use with features like field-level encryption.
**/
public class PublicKey {
    public OffsetDateTime createdTime;
    public PublicKey withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    public String id;
    public PublicKey withId(String id) {
        this.id = id;
        return this;
    }
    public PublicKeyConfig publicKeyConfig;
    public PublicKey withPublicKeyConfig(PublicKeyConfig publicKeyConfig) {
        this.publicKeyConfig = publicKeyConfig;
        return this;
    }
}