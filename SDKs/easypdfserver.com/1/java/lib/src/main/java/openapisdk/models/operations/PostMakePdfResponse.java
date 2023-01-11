package openapisdk.models.operations;



public class PostMakePdfResponse {
    public String contentType;
    public PostMakePdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostMakePdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] postMakePdf200ApplicationPdfBinaryString;
    public PostMakePdfResponse withPostMakePdf200ApplicationPdfBinaryString(byte[] postMakePdf200ApplicationPdfBinaryString) {
        this.postMakePdf200ApplicationPdfBinaryString = postMakePdf200ApplicationPdfBinaryString;
        return this;
    }
}