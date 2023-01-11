package openapisdk.models.operations;



public class GetBlockedNumbersResponse {
    public openapisdk.models.shared.BlockedNumber blockedNumber;
    public GetBlockedNumbersResponse withBlockedNumber(openapisdk.models.shared.BlockedNumber blockedNumber) {
        this.blockedNumber = blockedNumber;
        return this;
    }
    public String contentType;
    public GetBlockedNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlockedNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}