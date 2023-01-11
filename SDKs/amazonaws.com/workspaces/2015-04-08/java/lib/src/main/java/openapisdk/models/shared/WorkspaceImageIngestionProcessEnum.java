package openapisdk.models.shared;


public enum WorkspaceImageIngestionProcessEnum {
    BYOL_REGULAR("BYOL_REGULAR"),
    BYOL_GRAPHICS("BYOL_GRAPHICS"),
    BYOL_GRAPHICSPRO("BYOL_GRAPHICSPRO"),
    BYOL_REGULAR_WSP("BYOL_REGULAR_WSP");

    public final String value;

    private WorkspaceImageIngestionProcessEnum(String value) {
        this.value = value;
    }
}
