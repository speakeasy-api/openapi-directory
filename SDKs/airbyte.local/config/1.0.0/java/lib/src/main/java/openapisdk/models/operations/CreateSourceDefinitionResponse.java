package openapisdk.models.operations;



public class CreateSourceDefinitionResponse {
    public String contentType;
    public CreateSourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CreateSourceDefinitionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceDefinitionRead sourceDefinitionRead;
    public CreateSourceDefinitionResponse withSourceDefinitionRead(openapisdk.models.shared.SourceDefinitionRead sourceDefinitionRead) {
        this.sourceDefinitionRead = sourceDefinitionRead;
        return this;
    }
    public Long statusCode;
    public CreateSourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}