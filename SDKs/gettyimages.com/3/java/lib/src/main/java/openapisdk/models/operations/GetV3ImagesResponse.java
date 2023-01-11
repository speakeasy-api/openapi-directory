package openapisdk.models.operations;



public class GetV3ImagesResponse {
    public String contentType;
    public GetV3ImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagesDetailResults imagesDetailResults;
    public GetV3ImagesResponse withImagesDetailResults(openapisdk.models.shared.ImagesDetailResults imagesDetailResults) {
        this.imagesDetailResults = imagesDetailResults;
        return this;
    }
    public Long statusCode;
    public GetV3ImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}