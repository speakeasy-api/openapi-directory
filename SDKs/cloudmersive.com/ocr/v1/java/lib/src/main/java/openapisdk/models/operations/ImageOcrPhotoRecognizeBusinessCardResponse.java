package openapisdk.models.operations;



public class ImageOcrPhotoRecognizeBusinessCardResponse {
    public byte[] body;
    public ImageOcrPhotoRecognizeBusinessCardResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.BusinessCardRecognitionResult businessCardRecognitionResult;
    public ImageOcrPhotoRecognizeBusinessCardResponse withBusinessCardRecognitionResult(openapisdk.models.shared.BusinessCardRecognitionResult businessCardRecognitionResult) {
        this.businessCardRecognitionResult = businessCardRecognitionResult;
        return this;
    }
    public String contentType;
    public ImageOcrPhotoRecognizeBusinessCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImageOcrPhotoRecognizeBusinessCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}