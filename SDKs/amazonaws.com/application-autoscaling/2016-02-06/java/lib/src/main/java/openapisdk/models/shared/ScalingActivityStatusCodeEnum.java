package openapisdk.models.shared;


public enum ScalingActivityStatusCodeEnum {
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    SUCCESSFUL("Successful"),
    OVERRIDDEN("Overridden"),
    UNFULFILLED("Unfulfilled"),
    FAILED("Failed");

    public final String value;

    private ScalingActivityStatusCodeEnum(String value) {
        this.value = value;
    }
}
