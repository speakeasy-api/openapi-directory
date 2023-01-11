package openapisdk.models.shared;


public enum ComputePlatformEnum {
    DEFAULT_("Default"),
    AWS_LAMBDA("AWSLambda");

    public final String value;

    private ComputePlatformEnum(String value) {
        this.value = value;
    }
}
