package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDeliveryStreamsOutput {
    @JsonProperty("DeliveryStreamNames")
    public String[] deliveryStreamNames;
    public ListDeliveryStreamsOutput withDeliveryStreamNames(String[] deliveryStreamNames) {
        this.deliveryStreamNames = deliveryStreamNames;
        return this;
    }
    @JsonProperty("HasMoreDeliveryStreams")
    public Boolean hasMoreDeliveryStreams;
    public ListDeliveryStreamsOutput withHasMoreDeliveryStreams(Boolean hasMoreDeliveryStreams) {
        this.hasMoreDeliveryStreams = hasMoreDeliveryStreams;
        return this;
    }
}