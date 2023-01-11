package openapisdk.models.operations;



public class SendPostResponse {
    public String contentType;
    public SendPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object sendPost500ApplicationJSONAny;
    public SendPostResponse withSendPost500ApplicationJsonAny(Object sendPost500ApplicationJSONAny) {
        this.sendPost500ApplicationJSONAny = sendPost500ApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public SendPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}