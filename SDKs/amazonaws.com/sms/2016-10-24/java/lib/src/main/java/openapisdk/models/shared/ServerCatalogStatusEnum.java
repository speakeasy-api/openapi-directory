package openapisdk.models.shared;


public enum ServerCatalogStatusEnum {
    NOT_IMPORTED("NOT_IMPORTED"),
    IMPORTING("IMPORTING"),
    AVAILABLE("AVAILABLE"),
    DELETED("DELETED"),
    EXPIRED("EXPIRED");

    public final String value;

    private ServerCatalogStatusEnum(String value) {
        this.value = value;
    }
}
