package openapisdk.models.shared;


public enum StatusEnum {
    PENDING("PENDING"),
    DEPLOYED("DEPLOYED"),
    PENDING_DELETION("PENDING_DELETION");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
