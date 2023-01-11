package openapisdk.models.shared;


public enum ResolverQueryLogConfigAssociationErrorEnum {
    NONE("NONE"),
    DESTINATION_NOT_FOUND("DESTINATION_NOT_FOUND"),
    ACCESS_DENIED("ACCESS_DENIED"),
    INTERNAL_SERVICE_ERROR("INTERNAL_SERVICE_ERROR");

    public final String value;

    private ResolverQueryLogConfigAssociationErrorEnum(String value) {
        this.value = value;
    }
}
