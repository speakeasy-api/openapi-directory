package openapisdk.models.shared;



/**
 * TagListMessage
 * Represents the output of <a>ListTagsForResource</a>.
**/
public class TagListMessage {
    public TagList[] tagList;
    public TagListMessage withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
}