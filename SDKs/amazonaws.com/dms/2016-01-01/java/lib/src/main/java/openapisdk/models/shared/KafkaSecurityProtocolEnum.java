package openapisdk.models.shared;


public enum KafkaSecurityProtocolEnum {
    PLAINTEXT("plaintext"),
    SSL_AUTHENTICATION("ssl-authentication"),
    SSL_ENCRYPTION("ssl-encryption"),
    SASL_SSL("sasl-ssl");

    public final String value;

    private KafkaSecurityProtocolEnum(String value) {
        this.value = value;
    }
}
