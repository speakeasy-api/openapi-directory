package openapisdk.models.operations;



public class GetV3ImagesIdResponse {
    public String contentType;
    public GetV3ImagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagesDetailResults imagesDetailResults;
    public GetV3ImagesIdResponse withImagesDetailResults(openapisdk.models.shared.ImagesDetailResults imagesDetailResults) {
        this.imagesDetailResults = imagesDetailResults;
        return this;
    }
    public Long statusCode;
    public GetV3ImagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}