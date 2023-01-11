package openapisdk.models.shared;


public enum ContactsSortByEnum {
    CREATED_AT("created_at"),
    UPDATED_AT("updated_at"),
    NAME("name"),
    FIRST_NAME("first_name"),
    LAST_NAME("last_name"),
    EMAIL("email");

    public final String value;

    private ContactsSortByEnum(String value) {
        this.value = value;
    }
}
