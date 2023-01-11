package openapisdk.models.operations;



public class GetSourceDefinitionResponse {
    public String contentType;
    public GetSourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetSourceDefinitionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetSourceDefinitionResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceDefinitionRead sourceDefinitionRead;
    public GetSourceDefinitionResponse withSourceDefinitionRead(openapisdk.models.shared.SourceDefinitionRead sourceDefinitionRead) {
        this.sourceDefinitionRead = sourceDefinitionRead;
        return this;
    }
    public Long statusCode;
    public GetSourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}