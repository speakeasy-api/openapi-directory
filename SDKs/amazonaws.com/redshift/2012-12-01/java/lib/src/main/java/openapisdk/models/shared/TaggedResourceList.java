package openapisdk.models.shared;



/**
 * TaggedResourceList
 * A tag and its associated resource.
**/
public class TaggedResourceList {
    public String resourceName;
    public TaggedResourceList withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    public String resourceType;
    public TaggedResourceList withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    public Tag tag;
    public TaggedResourceList withTag(Tag tag) {
        this.tag = tag;
        return this;
    }
}