package openapisdk.models.shared;



/**
 * Tag
 * A key-value pair associated with a CloudWatch resource.
**/
public class Tag {
    public String key;
    public Tag withKey(String key) {
        this.key = key;
        return this;
    }
    public String value;
    public Tag withValue(String value) {
        this.value = value;
        return this;
    }
}