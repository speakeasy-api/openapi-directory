package openapisdk.models.shared;



/**
 * Tags
 *  A complex type that contains zero or more <code>Tag</code> elements.
**/
public class Tags {
    public TagList[] items;
    public Tags withItems(TagList[] items) {
        this.items = items;
        return this;
    }
}