package openapisdk.models.shared;


public enum ChildPolicyEnum {
    TERMINATE("TERMINATE"),
    REQUEST_CANCEL("REQUEST_CANCEL"),
    ABANDON("ABANDON");

    public final String value;

    private ChildPolicyEnum(String value) {
        this.value = value;
    }
}
