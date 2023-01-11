package openapisdk.models.shared;


public enum EventTypeEnum {
    SYSTEM("SYSTEM"),
    CREATE_ACTION("CREATE_ACTION"),
    DELETE_ACTION("DELETE_ACTION"),
    UPDATE_ACTION("UPDATE_ACTION"),
    EXECUTE_ACTION("EXECUTE_ACTION");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
