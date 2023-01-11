package openapisdk.models.operations;



public class ListPhiDetectionJobsResponse {
    public String contentType;
    public ListPhiDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPhiDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListPhiDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPhiDetectionJobsResponse listPHIDetectionJobsResponse;
    public ListPhiDetectionJobsResponse withListPhiDetectionJobsResponse(openapisdk.models.shared.ListPhiDetectionJobsResponse listPHIDetectionJobsResponse) {
        this.listPHIDetectionJobsResponse = listPHIDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListPhiDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListPhiDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListPhiDetectionJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}