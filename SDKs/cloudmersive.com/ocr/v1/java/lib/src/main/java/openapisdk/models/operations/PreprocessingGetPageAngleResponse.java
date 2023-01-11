package openapisdk.models.operations;



public class PreprocessingGetPageAngleResponse {
    public byte[] body;
    public PreprocessingGetPageAngleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PreprocessingGetPageAngleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPageAngleResult getPageAngleResult;
    public PreprocessingGetPageAngleResponse withGetPageAngleResult(openapisdk.models.shared.GetPageAngleResult getPageAngleResult) {
        this.getPageAngleResult = getPageAngleResult;
        return this;
    }
    public Long statusCode;
    public PreprocessingGetPageAngleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}