package openapisdk.models.operations;



public class AutoConfigureAutoImportIntervalResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AutoConfigureAutoImportIntervalResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AutoConfigureAutoImportIntervalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AutoConfigureAutoImportIntervalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}