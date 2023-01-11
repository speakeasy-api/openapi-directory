package openapisdk.models.shared;


public enum ServiceActionAssociationErrorCodeEnum {
    DUPLICATE_RESOURCE("DUPLICATE_RESOURCE"),
    INTERNAL_FAILURE("INTERNAL_FAILURE"),
    LIMIT_EXCEEDED("LIMIT_EXCEEDED"),
    RESOURCE_NOT_FOUND("RESOURCE_NOT_FOUND"),
    THROTTLING("THROTTLING");

    public final String value;

    private ServiceActionAssociationErrorCodeEnum(String value) {
        this.value = value;
    }
}
