package openapisdk.models.operations;



public class UpdateDestinationDefinitionResponse {
    public String contentType;
    public UpdateDestinationDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationDefinitionRead destinationDefinitionRead;
    public UpdateDestinationDefinitionResponse withDestinationDefinitionRead(openapisdk.models.shared.DestinationDefinitionRead destinationDefinitionRead) {
        this.destinationDefinitionRead = destinationDefinitionRead;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public UpdateDestinationDefinitionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public UpdateDestinationDefinitionResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public UpdateDestinationDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}