package openapisdk.models.operations;



public class ImageOcrPostResponse {
    public byte[] body;
    public ImageOcrPostResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageToTextResponse imageToTextResponse;
    public ImageOcrPostResponse withImageToTextResponse(openapisdk.models.shared.ImageToTextResponse imageToTextResponse) {
        this.imageToTextResponse = imageToTextResponse;
        return this;
    }
    public Long statusCode;
    public ImageOcrPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}