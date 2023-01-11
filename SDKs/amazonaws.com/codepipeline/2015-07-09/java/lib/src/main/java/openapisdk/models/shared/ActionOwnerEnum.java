package openapisdk.models.shared;


public enum ActionOwnerEnum {
    AWS("AWS"),
    THIRD_PARTY("ThirdParty"),
    CUSTOM("Custom");

    public final String value;

    private ActionOwnerEnum(String value) {
        this.value = value;
    }
}
