package openapisdk.models.operations;



public class CreateQualificationTypeResponse {
    public String contentType;
    public CreateQualificationTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateQualificationTypeResponse createQualificationTypeResponse;
    public CreateQualificationTypeResponse withCreateQualificationTypeResponse(openapisdk.models.shared.CreateQualificationTypeResponse createQualificationTypeResponse) {
        this.createQualificationTypeResponse = createQualificationTypeResponse;
        return this;
    }
    public Object requestError;
    public CreateQualificationTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public CreateQualificationTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public CreateQualificationTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}