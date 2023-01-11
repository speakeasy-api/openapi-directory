package openapisdk.models.operations;



public class ListAssessmentRunsResponse {
    public Object accessDeniedException;
    public ListAssessmentRunsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAssessmentRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListAssessmentRunsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListAssessmentRunsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListAssessmentRunsResponse listAssessmentRunsResponse;
    public ListAssessmentRunsResponse withListAssessmentRunsResponse(openapisdk.models.shared.ListAssessmentRunsResponse listAssessmentRunsResponse) {
        this.listAssessmentRunsResponse = listAssessmentRunsResponse;
        return this;
    }
    public Object noSuchEntityException;
    public ListAssessmentRunsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public ListAssessmentRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}