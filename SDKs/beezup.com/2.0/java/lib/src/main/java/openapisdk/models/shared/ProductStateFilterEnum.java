package openapisdk.models.shared;


public enum ProductStateFilterEnum {
    ALL("All"),
    ENABLED("Enabled"),
    DISABLED("Disabled");

    public final String value;

    private ProductStateFilterEnum(String value) {
        this.value = value;
    }
}
