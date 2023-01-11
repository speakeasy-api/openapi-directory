package openapisdk.models.shared;



/**
 * TagListMessage
 * Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
**/
public class TagListMessage {
    public TagList[] tagList;
    public TagListMessage withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
}