package openapisdk.models.shared;


public enum BatchDeleteImportDataErrorCodeEnum {
    NOT_FOUND("NOT_FOUND"),
    INTERNAL_SERVER_ERROR("INTERNAL_SERVER_ERROR"),
    OVER_LIMIT("OVER_LIMIT");

    public final String value;

    private BatchDeleteImportDataErrorCodeEnum(String value) {
        this.value = value;
    }
}
