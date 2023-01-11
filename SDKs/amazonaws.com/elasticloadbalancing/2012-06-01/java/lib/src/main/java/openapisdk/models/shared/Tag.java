package openapisdk.models.shared;



/**
 * Tag
 * Information about a tag.
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