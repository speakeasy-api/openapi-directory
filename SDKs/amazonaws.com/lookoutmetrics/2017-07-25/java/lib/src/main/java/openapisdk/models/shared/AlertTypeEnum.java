package openapisdk.models.shared;


public enum AlertTypeEnum {
    SNS("SNS"),
    LAMBDA("LAMBDA");

    public final String value;

    private AlertTypeEnum(String value) {
        this.value = value;
    }
}
