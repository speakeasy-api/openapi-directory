package openapisdk.models.operations;



public class GetSourceDefinitionSpecificationResponse {
    public String contentType;
    public GetSourceDefinitionSpecificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetSourceDefinitionSpecificationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetSourceDefinitionSpecificationResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceDefinitionSpecificationRead sourceDefinitionSpecificationRead;
    public GetSourceDefinitionSpecificationResponse withSourceDefinitionSpecificationRead(openapisdk.models.shared.SourceDefinitionSpecificationRead sourceDefinitionSpecificationRead) {
        this.sourceDefinitionSpecificationRead = sourceDefinitionSpecificationRead;
        return this;
    }
    public Long statusCode;
    public GetSourceDefinitionSpecificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}