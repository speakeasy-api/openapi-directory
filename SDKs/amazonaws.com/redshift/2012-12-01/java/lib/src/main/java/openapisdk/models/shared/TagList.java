package openapisdk.models.shared;



/**
 * TagList
 * A tag consisting of a name/value pair for a resource.
**/
public class TagList {
    public String key;
    public TagList withKey(String key) {
        this.key = key;
        return this;
    }
    public String value;
    public TagList withValue(String value) {
        this.value = value;
        return this;
    }
}