package openapisdk.models.operations;


public enum CreateRouteRequestBodyAuthorizationTypeEnum {
    NONE("NONE"),
    AWS_IAM("AWS_IAM"),
    CUSTOM("CUSTOM"),
    JWT("JWT");

    public final String value;

    private CreateRouteRequestBodyAuthorizationTypeEnum(String value) {
        this.value = value;
    }
}
