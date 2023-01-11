package openapisdk.models.shared;



/**
 * TagList
 *  A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
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