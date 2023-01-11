package openapisdk.models.shared;


public enum ProjectStateEnum {
    NORMAL("NORMAL"),
    SYNCING("SYNCING"),
    IMPORTING("IMPORTING");

    public final String value;

    private ProjectStateEnum(String value) {
        this.value = value;
    }
}
