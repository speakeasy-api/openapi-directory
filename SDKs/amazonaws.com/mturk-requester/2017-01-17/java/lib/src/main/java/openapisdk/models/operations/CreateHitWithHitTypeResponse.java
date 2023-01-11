package openapisdk.models.operations;



public class CreateHitWithHitTypeResponse {
    public String contentType;
    public CreateHitWithHitTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHitWithHitTypeResponse createHITWithHITTypeResponse;
    public CreateHitWithHitTypeResponse withCreateHitWithHitTypeResponse(openapisdk.models.shared.CreateHitWithHitTypeResponse createHITWithHITTypeResponse) {
        this.createHITWithHITTypeResponse = createHITWithHITTypeResponse;
        return this;
    }
    public Object requestError;
    public CreateHitWithHitTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public CreateHitWithHitTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public CreateHitWithHitTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}