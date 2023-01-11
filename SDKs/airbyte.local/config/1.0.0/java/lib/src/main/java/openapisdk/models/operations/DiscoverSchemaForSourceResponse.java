package openapisdk.models.operations;



public class DiscoverSchemaForSourceResponse {
    public String contentType;
    public DiscoverSchemaForSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public DiscoverSchemaForSourceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public DiscoverSchemaForSourceResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceDiscoverSchemaRead sourceDiscoverSchemaRead;
    public DiscoverSchemaForSourceResponse withSourceDiscoverSchemaRead(openapisdk.models.shared.SourceDiscoverSchemaRead sourceDiscoverSchemaRead) {
        this.sourceDiscoverSchemaRead = sourceDiscoverSchemaRead;
        return this;
    }
    public Long statusCode;
    public DiscoverSchemaForSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}