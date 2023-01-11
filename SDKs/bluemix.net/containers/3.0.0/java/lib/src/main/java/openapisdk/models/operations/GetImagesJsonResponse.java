package openapisdk.models.operations;



public class GetImagesJsonResponse {
    public String contentType;
    public GetImagesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object imageInfo;
    public GetImagesJsonResponse withImageInfo(Object imageInfo) {
        this.imageInfo = imageInfo;
        return this;
    }
    public Long statusCode;
    public GetImagesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}