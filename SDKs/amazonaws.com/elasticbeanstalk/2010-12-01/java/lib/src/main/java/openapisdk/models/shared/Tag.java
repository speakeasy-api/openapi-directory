package openapisdk.models.shared;



/**
 * Tag
 * Describes a tag applied to a resource in an environment.
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