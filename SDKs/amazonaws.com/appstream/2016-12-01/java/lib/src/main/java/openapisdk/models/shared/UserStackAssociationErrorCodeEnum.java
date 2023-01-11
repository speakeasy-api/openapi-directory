package openapisdk.models.shared;


public enum UserStackAssociationErrorCodeEnum {
    STACK_NOT_FOUND("STACK_NOT_FOUND"),
    USER_NAME_NOT_FOUND("USER_NAME_NOT_FOUND"),
    DIRECTORY_NOT_FOUND("DIRECTORY_NOT_FOUND"),
    INTERNAL_ERROR("INTERNAL_ERROR");

    public final String value;

    private UserStackAssociationErrorCodeEnum(String value) {
        this.value = value;
    }
}
