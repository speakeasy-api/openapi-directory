package openapisdk.models.shared;


public enum FirelensConfigurationTypeEnum {
    FLUENTD("fluentd"),
    FLUENTBIT("fluentbit");

    public final String value;

    private FirelensConfigurationTypeEnum(String value) {
        this.value = value;
    }
}
