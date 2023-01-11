package openapisdk.models.operations;



public class ChangeOrderV3Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ChangeOrderV3Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ChangeOrderV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ChangeOrderV3Response withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ChangeOrderV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public ChangeOrderV3Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}