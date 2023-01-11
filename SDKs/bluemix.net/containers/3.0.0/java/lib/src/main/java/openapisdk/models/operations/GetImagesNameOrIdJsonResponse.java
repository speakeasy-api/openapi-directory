package openapisdk.models.operations;



public class GetImagesNameOrIdJsonResponse {
    public String contentType;
    public GetImagesNameOrIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageDetail imageDetail;
    public GetImagesNameOrIdJsonResponse withImageDetail(openapisdk.models.shared.ImageDetail imageDetail) {
        this.imageDetail = imageDetail;
        return this;
    }
    public Long statusCode;
    public GetImagesNameOrIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}