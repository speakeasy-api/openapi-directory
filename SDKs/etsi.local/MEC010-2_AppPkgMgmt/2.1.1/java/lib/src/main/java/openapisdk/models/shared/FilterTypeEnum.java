package openapisdk.models.shared;


public enum FilterTypeEnum {
    FLOW("FLOW"),
    PACKET("PACKET");

    public final String value;

    private FilterTypeEnum(String value) {
        this.value = value;
    }
}
