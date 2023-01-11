package openapisdk.models.operations;



public class ImageOcrPhotoRecognizeFormAdvancedResponse {
    public byte[] body;
    public ImageOcrPhotoRecognizeFormAdvancedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrPhotoRecognizeFormAdvancedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormRecognitionResult formRecognitionResult;
    public ImageOcrPhotoRecognizeFormAdvancedResponse withFormRecognitionResult(openapisdk.models.shared.FormRecognitionResult formRecognitionResult) {
        this.formRecognitionResult = formRecognitionResult;
        return this;
    }
    public Long statusCode;
    public ImageOcrPhotoRecognizeFormAdvancedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}