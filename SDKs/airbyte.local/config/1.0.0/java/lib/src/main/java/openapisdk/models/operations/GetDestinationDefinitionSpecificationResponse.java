package openapisdk.models.operations;



public class GetDestinationDefinitionSpecificationResponse {
    public String contentType;
    public GetDestinationDefinitionSpecificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationDefinitionSpecificationRead destinationDefinitionSpecificationRead;
    public GetDestinationDefinitionSpecificationResponse withDestinationDefinitionSpecificationRead(openapisdk.models.shared.DestinationDefinitionSpecificationRead destinationDefinitionSpecificationRead) {
        this.destinationDefinitionSpecificationRead = destinationDefinitionSpecificationRead;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetDestinationDefinitionSpecificationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetDestinationDefinitionSpecificationResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public GetDestinationDefinitionSpecificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}