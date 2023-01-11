package openapisdk.models.operations;



public class AutoDeleteAutoImportResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AutoDeleteAutoImportResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AutoDeleteAutoImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AutoDeleteAutoImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}