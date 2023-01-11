package openapisdk.models.shared;


public enum ComputeTypeEnum {
    BUILD_GENERAL1_SMALL("BUILD_GENERAL1_SMALL"),
    BUILD_GENERAL1_MEDIUM("BUILD_GENERAL1_MEDIUM"),
    BUILD_GENERAL1_LARGE("BUILD_GENERAL1_LARGE");

    public final String value;

    private ComputeTypeEnum(String value) {
        this.value = value;
    }
}
