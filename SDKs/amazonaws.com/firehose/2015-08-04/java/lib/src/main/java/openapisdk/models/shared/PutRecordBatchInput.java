package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRecordBatchInput {
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public PutRecordBatchInput withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonProperty("Records")
    public Record[] records;
    public PutRecordBatchInput withRecords(Record[] records) {
        this.records = records;
        return this;
    }
}