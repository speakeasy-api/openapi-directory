package openapisdk.models.operations;



public class ImageOcrPhotoRecognizeReceiptResponse {
    public byte[] body;
    public ImageOcrPhotoRecognizeReceiptResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImageOcrPhotoRecognizeReceiptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReceiptRecognitionResult receiptRecognitionResult;
    public ImageOcrPhotoRecognizeReceiptResponse withReceiptRecognitionResult(openapisdk.models.shared.ReceiptRecognitionResult receiptRecognitionResult) {
        this.receiptRecognitionResult = receiptRecognitionResult;
        return this;
    }
    public Long statusCode;
    public ImageOcrPhotoRecognizeReceiptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}