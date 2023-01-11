package openapisdk.models.operations;



public class ImageOcrPhotoToTextResponse {
    public byte[] body;
    public ImageOcrPhotoToTextResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrPhotoToTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageToTextResponse imageToTextResponse;
    public ImageOcrPhotoToTextResponse withImageToTextResponse(openapisdk.models.shared.ImageToTextResponse imageToTextResponse) {
        this.imageToTextResponse = imageToTextResponse;
        return this;
    }
    public Long statusCode;
    public ImageOcrPhotoToTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}