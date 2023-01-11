package openapisdk.models.operations;



public class ListAssessmentTargetsResponse {
    public Object accessDeniedException;
    public ListAssessmentTargetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAssessmentTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListAssessmentTargetsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListAssessmentTargetsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListAssessmentTargetsResponse listAssessmentTargetsResponse;
    public ListAssessmentTargetsResponse withListAssessmentTargetsResponse(openapisdk.models.shared.ListAssessmentTargetsResponse listAssessmentTargetsResponse) {
        this.listAssessmentTargetsResponse = listAssessmentTargetsResponse;
        return this;
    }
    public Long statusCode;
    public ListAssessmentTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}