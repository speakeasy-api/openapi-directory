package openapisdk.models.shared;


public enum PresenceMessageActionEnum {
    ABSENT("ABSENT"),
    PRESENT("PRESENT"),
    ENTER("ENTER"),
    LEAVE("LEAVE"),
    UPDATE("UPDATE");

    public final String value;

    private PresenceMessageActionEnum(String value) {
        this.value = value;
    }
}
