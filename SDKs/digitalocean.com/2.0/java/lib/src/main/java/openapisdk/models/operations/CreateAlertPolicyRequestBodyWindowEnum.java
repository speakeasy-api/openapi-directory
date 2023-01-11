package openapisdk.models.operations;


public enum CreateAlertPolicyRequestBodyWindowEnum {
    FIVEM("5m"),
    TENM("10m"),
    THIRTYM("30m"),
    ONEH("1h");

    public final String value;

    private CreateAlertPolicyRequestBodyWindowEnum(String value) {
        this.value = value;
    }
}
