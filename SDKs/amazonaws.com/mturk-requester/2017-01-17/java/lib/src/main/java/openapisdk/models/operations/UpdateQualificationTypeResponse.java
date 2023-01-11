package openapisdk.models.operations;



public class UpdateQualificationTypeResponse {
    public String contentType;
    public UpdateQualificationTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public UpdateQualificationTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public UpdateQualificationTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public UpdateQualificationTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateQualificationTypeResponse updateQualificationTypeResponse;
    public UpdateQualificationTypeResponse withUpdateQualificationTypeResponse(openapisdk.models.shared.UpdateQualificationTypeResponse updateQualificationTypeResponse) {
        this.updateQualificationTypeResponse = updateQualificationTypeResponse;
        return this;
    }
}