package openapisdk.models.shared;


public enum ProjectResponseDefaultViewEnum {
    LIST("list"),
    BOARD("board"),
    CALENDAR("calendar"),
    TIMELINE("timeline");

    public final String value;

    private ProjectResponseDefaultViewEnum(String value) {
        this.value = value;
    }
}
