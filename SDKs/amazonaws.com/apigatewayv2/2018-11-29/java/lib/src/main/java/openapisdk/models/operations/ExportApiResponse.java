package openapisdk.models.operations;



public class ExportApiResponse {
    public Object badRequestException;
    public ExportApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ExportApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportApiResponse exportApiResponse;
    public ExportApiResponse withExportApiResponse(openapisdk.models.shared.ExportApiResponse exportApiResponse) {
        this.exportApiResponse = exportApiResponse;
        return this;
    }
    public Object notFoundException;
    public ExportApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ExportApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ExportApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}