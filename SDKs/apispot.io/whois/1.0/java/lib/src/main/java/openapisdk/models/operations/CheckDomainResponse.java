package openapisdk.models.operations;



public class CheckDomainResponse {
    public String contentType;
    public CheckDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CheckDomain200ApplicationJson checkDomain200ApplicationJSONObject;
    public CheckDomainResponse withCheckDomain200ApplicationJsonObject(CheckDomain200ApplicationJson checkDomain200ApplicationJSONObject) {
        this.checkDomain200ApplicationJSONObject = checkDomain200ApplicationJSONObject;
        return this;
    }
}