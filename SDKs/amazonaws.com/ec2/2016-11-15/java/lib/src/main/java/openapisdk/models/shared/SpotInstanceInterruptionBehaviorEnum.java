package openapisdk.models.shared;


public enum SpotInstanceInterruptionBehaviorEnum {
    HIBERNATE("hibernate"),
    STOP("stop"),
    TERMINATE("terminate");

    public final String value;

    private SpotInstanceInterruptionBehaviorEnum(String value) {
        this.value = value;
    }
}
