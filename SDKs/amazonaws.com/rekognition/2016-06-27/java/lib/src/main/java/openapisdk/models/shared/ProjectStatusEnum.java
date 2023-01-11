package openapisdk.models.shared;


public enum ProjectStatusEnum {
    CREATING("CREATING"),
    CREATED("CREATED"),
    DELETING("DELETING");

    public final String value;

    private ProjectStatusEnum(String value) {
        this.value = value;
    }
}
