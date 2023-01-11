package openapisdk.models.operations;



public class CreateHitResponse {
    public String contentType;
    public CreateHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHitResponse createHITResponse;
    public CreateHitResponse withCreateHitResponse(openapisdk.models.shared.CreateHitResponse createHITResponse) {
        this.createHITResponse = createHITResponse;
        return this;
    }
    public Object requestError;
    public CreateHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public CreateHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public CreateHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}