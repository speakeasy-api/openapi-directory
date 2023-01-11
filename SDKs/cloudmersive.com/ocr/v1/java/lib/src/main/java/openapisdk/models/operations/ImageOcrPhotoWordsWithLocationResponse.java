package openapisdk.models.operations;



public class ImageOcrPhotoWordsWithLocationResponse {
    public byte[] body;
    public ImageOcrPhotoWordsWithLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrPhotoWordsWithLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhotoToWordsWithLocationResult photoToWordsWithLocationResult;
    public ImageOcrPhotoWordsWithLocationResponse withPhotoToWordsWithLocationResult(openapisdk.models.shared.PhotoToWordsWithLocationResult photoToWordsWithLocationResult) {
        this.photoToWordsWithLocationResult = photoToWordsWithLocationResult;
        return this;
    }
    public Long statusCode;
    public ImageOcrPhotoWordsWithLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}