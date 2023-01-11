package openapisdk.models.operations;



public class GetUrlDetailResponse {
    public String contentType;
    public GetUrlDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlDetailResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> urlDetail;
    public GetUrlDetailResponse withUrlDetail(java.util.Map<String, Object> urlDetail) {
        this.urlDetail = urlDetail;
        return this;
    }
}