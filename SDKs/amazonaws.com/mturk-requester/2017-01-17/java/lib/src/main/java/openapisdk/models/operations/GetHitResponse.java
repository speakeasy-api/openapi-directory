package openapisdk.models.operations;



public class GetHitResponse {
    public String contentType;
    public GetHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetHitResponse getHITResponse;
    public GetHitResponse withGetHitResponse(openapisdk.models.shared.GetHitResponse getHITResponse) {
        this.getHITResponse = getHITResponse;
        return this;
    }
    public Object requestError;
    public GetHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public GetHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public GetHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}