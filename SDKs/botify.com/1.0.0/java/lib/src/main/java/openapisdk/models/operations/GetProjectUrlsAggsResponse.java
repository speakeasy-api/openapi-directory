package openapisdk.models.operations;



public class GetProjectUrlsAggsResponse {
    public String contentType;
    public GetProjectUrlsAggsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> default_;
    public GetProjectUrlsAggsResponse withDefault(java.util.Map<String, Object> default_) {
        this.default_ = default_;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetProjectUrlsAggsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetProjectUrlsAggsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}