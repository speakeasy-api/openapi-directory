package openapisdk.models.shared;



public class ResourceTagsDescriptionMessage {
    public String resourceArn;
    public ResourceTagsDescriptionMessage withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    public Tag[] resourceTags;
    public ResourceTagsDescriptionMessage withResourceTags(Tag[] resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
}