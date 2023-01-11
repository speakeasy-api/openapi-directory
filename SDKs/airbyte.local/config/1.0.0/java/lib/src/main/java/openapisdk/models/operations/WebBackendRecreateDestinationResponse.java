package openapisdk.models.operations;



public class WebBackendRecreateDestinationResponse {
    public String contentType;
    public WebBackendRecreateDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationRead destinationRead;
    public WebBackendRecreateDestinationResponse withDestinationRead(openapisdk.models.shared.DestinationRead destinationRead) {
        this.destinationRead = destinationRead;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public WebBackendRecreateDestinationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public WebBackendRecreateDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}