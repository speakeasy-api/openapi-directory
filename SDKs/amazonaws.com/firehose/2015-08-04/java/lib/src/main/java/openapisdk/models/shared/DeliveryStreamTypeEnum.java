package openapisdk.models.shared;


public enum DeliveryStreamTypeEnum {
    DIRECT_PUT("DirectPut"),
    KINESIS_STREAM_AS_SOURCE("KinesisStreamAsSource");

    public final String value;

    private DeliveryStreamTypeEnum(String value) {
        this.value = value;
    }
}
