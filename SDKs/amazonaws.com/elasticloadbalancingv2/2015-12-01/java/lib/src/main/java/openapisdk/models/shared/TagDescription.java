package openapisdk.models.shared;



/**
 * TagDescription
 * The tags associated with a resource.
**/
public class TagDescription {
    public String resourceArn;
    public TagDescription withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    public Tag[] tags;
    public TagDescription withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}