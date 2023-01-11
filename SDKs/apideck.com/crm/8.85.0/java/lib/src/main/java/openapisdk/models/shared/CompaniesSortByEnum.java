package openapisdk.models.shared;


public enum CompaniesSortByEnum {
    CREATED_AT("created_at"),
    UPDATED_AT("updated_at"),
    NAME("name");

    public final String value;

    private CompaniesSortByEnum(String value) {
        this.value = value;
    }
}
