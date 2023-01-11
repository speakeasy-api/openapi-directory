package openapisdk.models.operations;



public class GetTruststoreInfoResponse {
    public String contentType;
    public GetTruststoreInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTruststoreInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TruststoreInfo truststoreInfo;
    public GetTruststoreInfoResponse withTruststoreInfo(openapisdk.models.shared.TruststoreInfo truststoreInfo) {
        this.truststoreInfo = truststoreInfo;
        return this;
    }
    public String getTruststoreInfoDefaultApplicationJSONString;
    public GetTruststoreInfoResponse withGetTruststoreInfoDefaultApplicationJsonString(String getTruststoreInfoDefaultApplicationJSONString) {
        this.getTruststoreInfoDefaultApplicationJSONString = getTruststoreInfoDefaultApplicationJSONString;
        return this;
    }
}