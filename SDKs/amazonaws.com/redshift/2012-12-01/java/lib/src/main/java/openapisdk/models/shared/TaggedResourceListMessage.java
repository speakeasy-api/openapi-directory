package openapisdk.models.shared;



/**
 * TaggedResourceListMessage
 * <p/>
**/
public class TaggedResourceListMessage {
    public String marker;
    public TaggedResourceListMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public TaggedResourceList[] taggedResources;
    public TaggedResourceListMessage withTaggedResources(TaggedResourceList[] taggedResources) {
        this.taggedResources = taggedResources;
        return this;
    }
}