package openapisdk.models.operations;



public class GetTagsResponse {
    public String contentType;
    public GetTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagModelHaljson[] tagModelHaljsons;
    public GetTagsResponse withTagModelHaljsons(openapisdk.models.shared.TagModelHaljson[] tagModelHaljsons) {
        this.tagModelHaljsons = tagModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.TagModel[] tagModels;
    public GetTagsResponse withTagModels(openapisdk.models.shared.TagModel[] tagModels) {
        this.tagModels = tagModels;
        return this;
    }
}