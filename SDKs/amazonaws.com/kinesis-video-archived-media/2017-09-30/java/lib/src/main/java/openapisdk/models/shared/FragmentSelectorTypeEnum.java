package openapisdk.models.shared;


public enum FragmentSelectorTypeEnum {
    PRODUCER_TIMESTAMP("PRODUCER_TIMESTAMP"),
    SERVER_TIMESTAMP("SERVER_TIMESTAMP");

    public final String value;

    private FragmentSelectorTypeEnum(String value) {
        this.value = value;
    }
}
