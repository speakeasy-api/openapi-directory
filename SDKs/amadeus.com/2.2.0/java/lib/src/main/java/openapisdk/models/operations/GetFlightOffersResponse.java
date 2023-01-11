package openapisdk.models.operations;



public class GetFlightOffersResponse {
    public String contentType;
    public GetFlightOffersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error400;
    public GetFlightOffersResponse withError400(Object error400) {
        this.error400 = error400;
        return this;
    }
    public Object error500;
    public GetFlightOffersResponse withError500(Object error500) {
        this.error500 = error500;
        return this;
    }
    public Long statusCode;
    public GetFlightOffersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object success;
    public GetFlightOffersResponse withSuccess(Object success) {
        this.success = success;
        return this;
    }
}