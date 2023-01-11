package openapisdk.models.shared;


public enum NodeAssociationStatusEnum {
    SUCCESS("SUCCESS"),
    FAILED("FAILED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private NodeAssociationStatusEnum(String value) {
        this.value = value;
    }
}
