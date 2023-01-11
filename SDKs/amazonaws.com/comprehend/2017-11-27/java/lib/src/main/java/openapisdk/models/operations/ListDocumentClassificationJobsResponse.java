package openapisdk.models.operations;



public class ListDocumentClassificationJobsResponse {
    public String contentType;
    public ListDocumentClassificationJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDocumentClassificationJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListDocumentClassificationJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListDocumentClassificationJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDocumentClassificationJobsResponse listDocumentClassificationJobsResponse;
    public ListDocumentClassificationJobsResponse withListDocumentClassificationJobsResponse(openapisdk.models.shared.ListDocumentClassificationJobsResponse listDocumentClassificationJobsResponse) {
        this.listDocumentClassificationJobsResponse = listDocumentClassificationJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListDocumentClassificationJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDocumentClassificationJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}