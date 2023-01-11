package openapisdk.models.shared;


public enum ContactTypeEnum {
    PERSONAL("PERSONAL"),
    ESCALATION("ESCALATION");

    public final String value;

    private ContactTypeEnum(String value) {
        this.value = value;
    }
}
