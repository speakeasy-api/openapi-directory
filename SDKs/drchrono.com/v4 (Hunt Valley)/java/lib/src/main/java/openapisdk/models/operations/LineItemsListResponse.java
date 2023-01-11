package openapisdk.models.operations;



public class LineItemsListResponse {
    public String contentType;
    public LineItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LineItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LineItemsList200ApplicationJson lineItemsList200ApplicationJSONObject;
    public LineItemsListResponse withLineItemsList200ApplicationJsonObject(LineItemsList200ApplicationJson lineItemsList200ApplicationJSONObject) {
        this.lineItemsList200ApplicationJSONObject = lineItemsList200ApplicationJSONObject;
        return this;
    }
}