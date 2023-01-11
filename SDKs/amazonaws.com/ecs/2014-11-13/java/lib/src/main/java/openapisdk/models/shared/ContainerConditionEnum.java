package openapisdk.models.shared;


public enum ContainerConditionEnum {
    START("START"),
    COMPLETE("COMPLETE"),
    SUCCESS("SUCCESS"),
    HEALTHY("HEALTHY");

    public final String value;

    private ContainerConditionEnum(String value) {
        this.value = value;
    }
}
