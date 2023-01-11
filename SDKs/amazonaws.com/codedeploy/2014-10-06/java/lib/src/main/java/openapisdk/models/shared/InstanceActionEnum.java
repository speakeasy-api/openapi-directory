package openapisdk.models.shared;


public enum InstanceActionEnum {
    TERMINATE("TERMINATE"),
    KEEP_ALIVE("KEEP_ALIVE");

    public final String value;

    private InstanceActionEnum(String value) {
        this.value = value;
    }
}
