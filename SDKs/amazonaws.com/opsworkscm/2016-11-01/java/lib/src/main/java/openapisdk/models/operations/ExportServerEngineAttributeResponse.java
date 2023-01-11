package openapisdk.models.operations;



public class ExportServerEngineAttributeResponse {
    public String contentType;
    public ExportServerEngineAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportServerEngineAttributeResponse exportServerEngineAttributeResponse;
    public ExportServerEngineAttributeResponse withExportServerEngineAttributeResponse(openapisdk.models.shared.ExportServerEngineAttributeResponse exportServerEngineAttributeResponse) {
        this.exportServerEngineAttributeResponse = exportServerEngineAttributeResponse;
        return this;
    }
    public Object invalidStateException;
    public ExportServerEngineAttributeResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public ExportServerEngineAttributeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ExportServerEngineAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ExportServerEngineAttributeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}