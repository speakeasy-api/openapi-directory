package openapisdk.models.shared;



/**
 * TagList
 * Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.
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