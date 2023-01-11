package openapisdk.models.shared;


public enum StatusEnum {
    ENABLED("enabled"),
    DISABLED("disabled");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
