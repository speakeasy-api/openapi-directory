package openapisdk.models.shared;


public enum RetryActionEnum {
    RETRY("RETRY"),
    EXIT("EXIT");

    public final String value;

    private RetryActionEnum(String value) {
        this.value = value;
    }
}
