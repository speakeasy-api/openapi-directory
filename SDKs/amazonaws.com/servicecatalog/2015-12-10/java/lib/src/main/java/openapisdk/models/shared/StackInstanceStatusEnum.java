package openapisdk.models.shared;


public enum StackInstanceStatusEnum {
    CURRENT("CURRENT"),
    OUTDATED("OUTDATED"),
    INOPERABLE("INOPERABLE");

    public final String value;

    private StackInstanceStatusEnum(String value) {
        this.value = value;
    }
}
