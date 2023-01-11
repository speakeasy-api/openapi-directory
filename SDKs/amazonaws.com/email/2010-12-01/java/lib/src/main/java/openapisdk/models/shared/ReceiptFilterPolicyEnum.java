package openapisdk.models.shared;


public enum ReceiptFilterPolicyEnum {
    BLOCK("Block"),
    ALLOW("Allow");

    public final String value;

    private ReceiptFilterPolicyEnum(String value) {
        this.value = value;
    }
}
