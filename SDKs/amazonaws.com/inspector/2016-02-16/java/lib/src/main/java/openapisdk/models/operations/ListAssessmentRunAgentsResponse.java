package openapisdk.models.operations;



public class ListAssessmentRunAgentsResponse {
    public Object accessDeniedException;
    public ListAssessmentRunAgentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAssessmentRunAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListAssessmentRunAgentsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListAssessmentRunAgentsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListAssessmentRunAgentsResponse listAssessmentRunAgentsResponse;
    public ListAssessmentRunAgentsResponse withListAssessmentRunAgentsResponse(openapisdk.models.shared.ListAssessmentRunAgentsResponse listAssessmentRunAgentsResponse) {
        this.listAssessmentRunAgentsResponse = listAssessmentRunAgentsResponse;
        return this;
    }
    public Object noSuchEntityException;
    public ListAssessmentRunAgentsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public ListAssessmentRunAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}