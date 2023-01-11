package openapisdk.models.shared;



/**
 * KeyGroupConfig
 * <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
**/
public class KeyGroupConfig {
    public String comment;
    public KeyGroupConfig withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public java.util.Map<String, Object>[] items;
    public KeyGroupConfig withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public String name;
    public KeyGroupConfig withName(String name) {
        this.name = name;
        return this;
    }
}