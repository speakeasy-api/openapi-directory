package openapisdk.models.shared;


public enum OwnerEnum {
    CUSTOM_LAMBDA("CUSTOM_LAMBDA"),
    AWS("AWS");

    public final String value;

    private OwnerEnum(String value) {
        this.value = value;
    }
}
