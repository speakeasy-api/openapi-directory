package openapisdk.models.shared;


public enum DetailStatusEnum {
    AVAILABLE("AVAILABLE"),
    PROCESSING("PROCESSING"),
    UNAVAILABLE("UNAVAILABLE");

    public final String value;

    private DetailStatusEnum(String value) {
        this.value = value;
    }
}
