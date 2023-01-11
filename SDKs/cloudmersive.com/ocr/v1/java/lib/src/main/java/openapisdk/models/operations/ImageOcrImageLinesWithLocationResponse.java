package openapisdk.models.operations;



public class ImageOcrImageLinesWithLocationResponse {
    public byte[] body;
    public ImageOcrImageLinesWithLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrImageLinesWithLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageToLinesWithLocationResult imageToLinesWithLocationResult;
    public ImageOcrImageLinesWithLocationResponse withImageToLinesWithLocationResult(openapisdk.models.shared.ImageToLinesWithLocationResult imageToLinesWithLocationResult) {
        this.imageToLinesWithLocationResult = imageToLinesWithLocationResult;
        return this;
    }
    public Long statusCode;
    public ImageOcrImageLinesWithLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}