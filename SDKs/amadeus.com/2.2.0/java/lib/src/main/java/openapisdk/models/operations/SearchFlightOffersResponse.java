package openapisdk.models.operations;



public class SearchFlightOffersResponse {
    public String contentType;
    public SearchFlightOffersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error400;
    public SearchFlightOffersResponse withError400(Object error400) {
        this.error400 = error400;
        return this;
    }
    public Object error500;
    public SearchFlightOffersResponse withError500(Object error500) {
        this.error500 = error500;
        return this;
    }
    public Long statusCode;
    public SearchFlightOffersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object success;
    public SearchFlightOffersResponse withSuccess(Object success) {
        this.success = success;
        return this;
    }
}