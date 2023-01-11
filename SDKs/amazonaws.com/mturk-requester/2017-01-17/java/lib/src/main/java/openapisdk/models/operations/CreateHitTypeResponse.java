package openapisdk.models.operations;



public class CreateHitTypeResponse {
    public String contentType;
    public CreateHitTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHitTypeResponse createHITTypeResponse;
    public CreateHitTypeResponse withCreateHitTypeResponse(openapisdk.models.shared.CreateHitTypeResponse createHITTypeResponse) {
        this.createHITTypeResponse = createHITTypeResponse;
        return this;
    }
    public Object requestError;
    public CreateHitTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public CreateHitTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public CreateHitTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}