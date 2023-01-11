package openapisdk.models.operations;



public class UpdateSourceDefinitionResponse {
    public String contentType;
    public UpdateSourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public UpdateSourceDefinitionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public UpdateSourceDefinitionResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceDefinitionRead sourceDefinitionRead;
    public UpdateSourceDefinitionResponse withSourceDefinitionRead(openapisdk.models.shared.SourceDefinitionRead sourceDefinitionRead) {
        this.sourceDefinitionRead = sourceDefinitionRead;
        return this;
    }
    public Long statusCode;
    public UpdateSourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}