package openapisdk.models.shared;


public enum RelationalDatabasePasswordVersionEnum {
    CURRENT("CURRENT"),
    PREVIOUS("PREVIOUS"),
    PENDING("PENDING");

    public final String value;

    private RelationalDatabasePasswordVersionEnum(String value) {
        this.value = value;
    }
}
