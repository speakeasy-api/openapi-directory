package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * PublicKey
 * A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
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