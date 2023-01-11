package openapisdk.models.operations;



public class UpdateTagResponse {
    public String contentType;
    public UpdateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagModel tagModel;
    public UpdateTagResponse withTagModel(openapisdk.models.shared.TagModel tagModel) {
        this.tagModel = tagModel;
        return this;
    }
    public openapisdk.models.shared.TagModelHaljson tagModelHaljson;
    public UpdateTagResponse withTagModelHaljson(openapisdk.models.shared.TagModelHaljson tagModelHaljson) {
        this.tagModelHaljson = tagModelHaljson;
        return this;
    }
}