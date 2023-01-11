package openapisdk.models.operations;



public class ExecuteSourceDiscoverSchemaResponse {
    public String contentType;
    public ExecuteSourceDiscoverSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public ExecuteSourceDiscoverSchemaResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceDiscoverSchemaRead sourceDiscoverSchemaRead;
    public ExecuteSourceDiscoverSchemaResponse withSourceDiscoverSchemaRead(openapisdk.models.shared.SourceDiscoverSchemaRead sourceDiscoverSchemaRead) {
        this.sourceDiscoverSchemaRead = sourceDiscoverSchemaRead;
        return this;
    }
    public Long statusCode;
    public ExecuteSourceDiscoverSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}