package openapisdk.models.shared;


public enum FailedItemErrorCodeEnum {
    INVALID_ARN("INVALID_ARN"),
    DUPLICATE_ARN("DUPLICATE_ARN"),
    ITEM_DOES_NOT_EXIST("ITEM_DOES_NOT_EXIST"),
    ACCESS_DENIED("ACCESS_DENIED"),
    LIMIT_EXCEEDED("LIMIT_EXCEEDED"),
    INTERNAL_ERROR("INTERNAL_ERROR");

    public final String value;

    private FailedItemErrorCodeEnum(String value) {
        this.value = value;
    }
}
