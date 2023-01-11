package openapisdk.models.shared;


public enum LensStatusEnum {
    CURRENT("CURRENT"),
    NOT_CURRENT("NOT_CURRENT"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private LensStatusEnum(String value) {
        this.value = value;
    }
}
