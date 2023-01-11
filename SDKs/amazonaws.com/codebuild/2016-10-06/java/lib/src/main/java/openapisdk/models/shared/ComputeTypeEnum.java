package openapisdk.models.shared;


public enum ComputeTypeEnum {
    BUILD_GENERAL1_SMALL("BUILD_GENERAL1_SMALL"),
    BUILD_GENERAL1_MEDIUM("BUILD_GENERAL1_MEDIUM"),
    BUILD_GENERAL1_LARGE("BUILD_GENERAL1_LARGE"),
    BUILD_GENERAL12_XLARGE("BUILD_GENERAL1_2XLARGE");

    public final String value;

    private ComputeTypeEnum(String value) {
        this.value = value;
    }
}
