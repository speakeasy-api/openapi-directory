package openapisdk.models.shared;


public enum BgpStatusEnum {
    UP("up"),
    DOWN("down"),
    UNKNOWN("unknown");

    public final String value;

    private BgpStatusEnum(String value) {
        this.value = value;
    }
}
