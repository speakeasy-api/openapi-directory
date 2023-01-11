package openapisdk.models.shared;


public enum StatusEnum {
    IGNORE("IGNORE"),
    RESOLVED("RESOLVED"),
    PENDING("PENDING");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
