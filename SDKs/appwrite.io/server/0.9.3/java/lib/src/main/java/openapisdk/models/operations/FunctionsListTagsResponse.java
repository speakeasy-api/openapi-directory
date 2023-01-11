package openapisdk.models.operations;



public class FunctionsListTagsResponse {
    public String contentType;
    public FunctionsListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagList tagList;
    public FunctionsListTagsResponse withTagList(openapisdk.models.shared.TagList tagList) {
        this.tagList = tagList;
        return this;
    }
}