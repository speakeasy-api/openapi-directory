package openapisdk.models.shared;



public class ListTemplatesResponse {
    public String nextToken;
    public ListTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public TemplateMetadata[] templatesMetadata;
    public ListTemplatesResponse withTemplatesMetadata(TemplateMetadata[] templatesMetadata) {
        this.templatesMetadata = templatesMetadata;
        return this;
    }
}