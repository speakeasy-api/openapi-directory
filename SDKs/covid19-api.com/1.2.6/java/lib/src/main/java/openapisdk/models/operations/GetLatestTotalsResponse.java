package openapisdk.models.operations;



public class GetLatestTotalsResponse {
    public byte[] body;
    public GetLatestTotalsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLatestTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLatestTotals200ApplicationJson[] getLatestTotals200ApplicationJSONObjects;
    public GetLatestTotalsResponse withGetLatestTotals200ApplicationJsonObjects(GetLatestTotals200ApplicationJson[] getLatestTotals200ApplicationJSONObjects) {
        this.getLatestTotals200ApplicationJSONObjects = getLatestTotals200ApplicationJSONObjects;
        return this;
    }
}