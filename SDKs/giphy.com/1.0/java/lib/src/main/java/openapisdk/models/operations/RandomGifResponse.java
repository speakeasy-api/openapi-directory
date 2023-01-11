package openapisdk.models.operations;



public class RandomGifResponse {
    public String contentType;
    public RandomGifResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RandomGifResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RandomGif200ApplicationJson randomGif200ApplicationJSONObject;
    public RandomGifResponse withRandomGif200ApplicationJsonObject(RandomGif200ApplicationJson randomGif200ApplicationJSONObject) {
        this.randomGif200ApplicationJSONObject = randomGif200ApplicationJSONObject;
        return this;
    }
}