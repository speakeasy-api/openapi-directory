package openapisdk.models.shared;



public class TagsType {
    public String nextToken;
    public TagsType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public TagDescription[] tags;
    public TagsType withTags(TagDescription[] tags) {
        this.tags = tags;
        return this;
    }
}