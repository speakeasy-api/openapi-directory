package openapisdk.models.shared;


public enum BlockResponseEnum {
    NODATA("NODATA"),
    NXDOMAIN("NXDOMAIN"),
    OVERRIDE("OVERRIDE");

    public final String value;

    private BlockResponseEnum(String value) {
        this.value = value;
    }
}
