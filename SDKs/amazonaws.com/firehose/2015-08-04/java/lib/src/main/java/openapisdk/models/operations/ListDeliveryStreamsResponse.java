package openapisdk.models.operations;



public class ListDeliveryStreamsResponse {
    public String contentType;
    public ListDeliveryStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeliveryStreamsOutput listDeliveryStreamsOutput;
    public ListDeliveryStreamsResponse withListDeliveryStreamsOutput(openapisdk.models.shared.ListDeliveryStreamsOutput listDeliveryStreamsOutput) {
        this.listDeliveryStreamsOutput = listDeliveryStreamsOutput;
        return this;
    }
    public Long statusCode;
    public ListDeliveryStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}