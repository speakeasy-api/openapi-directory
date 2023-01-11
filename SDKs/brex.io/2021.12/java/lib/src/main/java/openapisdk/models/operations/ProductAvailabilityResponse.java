package openapisdk.models.operations;



public class ProductAvailabilityResponse {
    public String contentType;
    public ProductAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productAvailability200ApplicationJSONAny;
    public ProductAvailabilityResponse withProductAvailability200ApplicationJsonAny(Object productAvailability200ApplicationJSONAny) {
        this.productAvailability200ApplicationJSONAny = productAvailability200ApplicationJSONAny;
        return this;
    }
    public Object productAvailabilityDefaultApplicationJSONAny;
    public ProductAvailabilityResponse withProductAvailabilityDefaultApplicationJsonAny(Object productAvailabilityDefaultApplicationJSONAny) {
        this.productAvailabilityDefaultApplicationJSONAny = productAvailabilityDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}