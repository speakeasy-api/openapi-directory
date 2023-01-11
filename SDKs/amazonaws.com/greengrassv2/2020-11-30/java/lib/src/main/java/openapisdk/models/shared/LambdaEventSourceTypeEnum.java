package openapisdk.models.shared;


public enum LambdaEventSourceTypeEnum {
    PUB_SUB("PUB_SUB"),
    IOT_CORE("IOT_CORE");

    public final String value;

    private LambdaEventSourceTypeEnum(String value) {
        this.value = value;
    }
}
