package openapisdk.models.operations;


public enum UpdateRouteRequestBodyAuthorizationTypeEnum {
    NONE("NONE"),
    AWS_IAM("AWS_IAM"),
    CUSTOM("CUSTOM"),
    JWT("JWT");

    public final String value;

    private UpdateRouteRequestBodyAuthorizationTypeEnum(String value) {
        this.value = value;
    }
}
