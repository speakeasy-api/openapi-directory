package openapisdk.models.shared;


public enum ProjectRequestDefaultViewEnum {
    LIST("list"),
    BOARD("board"),
    CALENDAR("calendar"),
    TIMELINE("timeline");

    public final String value;

    private ProjectRequestDefaultViewEnum(String value) {
        this.value = value;
    }
}
