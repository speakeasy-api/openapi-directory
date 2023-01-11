package openapisdk.models.shared;


public enum KafkaClusterEncryptionInTransitTypeEnum {
    PLAINTEXT("PLAINTEXT"),
    TLS("TLS");

    public final String value;

    private KafkaClusterEncryptionInTransitTypeEnum(String value) {
        this.value = value;
    }
}
