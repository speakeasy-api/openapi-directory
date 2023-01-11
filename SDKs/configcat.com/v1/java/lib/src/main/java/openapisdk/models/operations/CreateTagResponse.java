package openapisdk.models.operations;



public class CreateTagResponse {
    public String contentType;
    public CreateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagModel tagModel;
    public CreateTagResponse withTagModel(openapisdk.models.shared.TagModel tagModel) {
        this.tagModel = tagModel;
        return this;
    }
    public openapisdk.models.shared.TagModelHaljson tagModelHaljson;
    public CreateTagResponse withTagModelHaljson(openapisdk.models.shared.TagModelHaljson tagModelHaljson) {
        this.tagModelHaljson = tagModelHaljson;
        return this;
    }
}