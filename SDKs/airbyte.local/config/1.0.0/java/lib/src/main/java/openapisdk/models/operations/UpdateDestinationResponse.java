package openapisdk.models.operations;



public class UpdateDestinationResponse {
    public String contentType;
    public UpdateDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationRead destinationRead;
    public UpdateDestinationResponse withDestinationRead(openapisdk.models.shared.DestinationRead destinationRead) {
        this.destinationRead = destinationRead;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public UpdateDestinationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public UpdateDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}