package openapisdk.models.operations;



public class GetLastBlockNumberResponse {
    public String contentType;
    public GetLastBlockNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLastBlockNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetLastBlockNumber getLastBlockNumber;
    public GetLastBlockNumberResponse withGetLastBlockNumber(openapisdk.models.shared.GetLastBlockNumber getLastBlockNumber) {
        this.getLastBlockNumber = getLastBlockNumber;
        return this;
    }
}