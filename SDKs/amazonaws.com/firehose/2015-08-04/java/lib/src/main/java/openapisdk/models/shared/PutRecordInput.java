package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRecordInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public PutRecordInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonProperty("Record")
    public Record record;
    public PutRecordInput withRecord(Record record) {
        this.record = record;
        return this;
    }
}