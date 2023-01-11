package openapisdk.models.shared;



/**
 * PublicKeyConfig
 * Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
**/
public class PublicKeyConfig {
    public String callerReference;
    public PublicKeyConfig withCallerReference(String callerReference) {
        this.callerReference = callerReference;
        return this;
    }
    public String comment;
    public PublicKeyConfig withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public String encodedKey;
    public PublicKeyConfig withEncodedKey(String encodedKey) {
        this.encodedKey = encodedKey;
        return this;
    }
    public String name;
    public PublicKeyConfig withName(String name) {
        this.name = name;
        return this;
    }
}