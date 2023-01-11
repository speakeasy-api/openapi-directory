package openapisdk.models.shared;


public enum KafkaClusterClientAuthenticationTypeEnum {
    NONE("NONE"),
    IAM("IAM");

    public final String value;

    private KafkaClusterClientAuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
