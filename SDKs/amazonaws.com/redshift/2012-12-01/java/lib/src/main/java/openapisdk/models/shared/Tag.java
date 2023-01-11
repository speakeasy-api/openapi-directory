package openapisdk.models.shared;



/**
 * Tag
 * A tag consisting of a name/value pair for a resource.
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