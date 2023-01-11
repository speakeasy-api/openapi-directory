package openapisdk.models.operations;



public class ImageOcrImageWordsWithLocationResponse {
    public byte[] body;
    public ImageOcrImageWordsWithLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrImageWordsWithLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageToWordsWithLocationResult imageToWordsWithLocationResult;
    public ImageOcrImageWordsWithLocationResponse withImageToWordsWithLocationResult(openapisdk.models.shared.ImageToWordsWithLocationResult imageToWordsWithLocationResult) {
        this.imageToWordsWithLocationResult = imageToWordsWithLocationResult;
        return this;
    }
    public Long statusCode;
    public ImageOcrImageWordsWithLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}