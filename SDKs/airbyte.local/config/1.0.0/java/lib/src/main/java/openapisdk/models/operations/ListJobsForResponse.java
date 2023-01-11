package openapisdk.models.operations;



public class ListJobsForResponse {
    public String contentType;
    public ListJobsForResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public ListJobsForResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.JobReadList jobReadList;
    public ListJobsForResponse withJobReadList(openapisdk.models.shared.JobReadList jobReadList) {
        this.jobReadList = jobReadList;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public ListJobsForResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public ListJobsForResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}