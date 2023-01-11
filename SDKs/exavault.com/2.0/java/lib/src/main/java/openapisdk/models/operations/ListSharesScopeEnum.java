package openapisdk.models.operations;


public enum ListSharesScopeEnum {
    ALL("all"),
    ACTIVE("active"),
    CURRENT_USER("currentUser");

    public final String value;

    private ListSharesScopeEnum(String value) {
        this.value = value;
    }
}
