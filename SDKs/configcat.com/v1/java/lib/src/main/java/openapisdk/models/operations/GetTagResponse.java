package openapisdk.models.operations;



public class GetTagResponse {
    public String contentType;
    public GetTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagModel tagModel;
    public GetTagResponse withTagModel(openapisdk.models.shared.TagModel tagModel) {
        this.tagModel = tagModel;
        return this;
    }
    public openapisdk.models.shared.TagModelHaljson tagModelHaljson;
    public GetTagResponse withTagModelHaljson(openapisdk.models.shared.TagModelHaljson tagModelHaljson) {
        this.tagModelHaljson = tagModelHaljson;
        return this;
    }
}