package openapisdk.models.shared;


public enum MetricsNameEnum {
    INCOMING_BYTES("IncomingBytes"),
    INCOMING_RECORDS("IncomingRecords"),
    OUTGOING_BYTES("OutgoingBytes"),
    OUTGOING_RECORDS("OutgoingRecords"),
    WRITE_PROVISIONED_THROUGHPUT_EXCEEDED("WriteProvisionedThroughputExceeded"),
    READ_PROVISIONED_THROUGHPUT_EXCEEDED("ReadProvisionedThroughputExceeded"),
    ITERATOR_AGE_MILLISECONDS("IteratorAgeMilliseconds"),
    ALL("ALL");

    public final String value;

    private MetricsNameEnum(String value) {
        this.value = value;
    }
}
