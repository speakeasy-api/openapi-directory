package openapisdk.models.operations;



public class GetAssessmentReportResponse {
    public Object accessDeniedException;
    public GetAssessmentReportResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object assessmentRunInProgressException;
    public GetAssessmentReportResponse withAssessmentRunInProgressException(Object assessmentRunInProgressException) {
        this.assessmentRunInProgressException = assessmentRunInProgressException;
        return this;
    }
    public String contentType;
    public GetAssessmentReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssessmentReportResponse getAssessmentReportResponse;
    public GetAssessmentReportResponse withGetAssessmentReportResponse(openapisdk.models.shared.GetAssessmentReportResponse getAssessmentReportResponse) {
        this.getAssessmentReportResponse = getAssessmentReportResponse;
        return this;
    }
    public Object internalException;
    public GetAssessmentReportResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public GetAssessmentReportResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public GetAssessmentReportResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public GetAssessmentReportResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetAssessmentReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedFeatureException;
    public GetAssessmentReportResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
}