package openapisdk.models.shared;


public enum ResourceOwnerEnum {
    SELF("SELF"),
    OTHER_ACCOUNTS("OTHER_ACCOUNTS");

    public final String value;

    private ResourceOwnerEnum(String value) {
        this.value = value;
    }
}
