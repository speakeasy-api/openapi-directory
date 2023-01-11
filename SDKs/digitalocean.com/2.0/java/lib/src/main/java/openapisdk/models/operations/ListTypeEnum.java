package openapisdk.models.operations;


public enum ListTypeEnum {
    DROPLET("droplet"),
    KUBERNETES("kubernetes");

    public final String value;

    private ListTypeEnum(String value) {
        this.value = value;
    }
}
