package openapisdk.models.operations;



public class CreateSourceResponse {
    public String contentType;
    public CreateSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CreateSourceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceRead sourceRead;
    public CreateSourceResponse withSourceRead(openapisdk.models.shared.SourceRead sourceRead) {
        this.sourceRead = sourceRead;
        return this;
    }
    public Long statusCode;
    public CreateSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}