package openapisdk.models.shared;


public enum AccessStatusEnum {
    ENABLED("ENABLED"),
    UNDER_CHANGE("UNDER_CHANGE"),
    DISABLED("DISABLED");

    public final String value;

    private AccessStatusEnum(String value) {
        this.value = value;
    }
}
