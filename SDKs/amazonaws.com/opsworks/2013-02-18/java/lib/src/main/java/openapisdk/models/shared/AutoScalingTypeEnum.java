package openapisdk.models.shared;


public enum AutoScalingTypeEnum {
    LOAD("load"),
    TIMER("timer");

    public final String value;

    private AutoScalingTypeEnum(String value) {
        this.value = value;
    }
}
