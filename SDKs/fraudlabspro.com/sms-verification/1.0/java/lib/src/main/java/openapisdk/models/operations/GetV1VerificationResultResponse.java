package openapisdk.models.operations;



public class GetV1VerificationResultResponse {
    public String contentType;
    public GetV1VerificationResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV1VerificationResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getV1VerificationResult200ApplicationJSONString;
    public GetV1VerificationResultResponse withGetV1VerificationResult200ApplicationJsonString(String getV1VerificationResult200ApplicationJSONString) {
        this.getV1VerificationResult200ApplicationJSONString = getV1VerificationResult200ApplicationJSONString;
        return this;
    }
}