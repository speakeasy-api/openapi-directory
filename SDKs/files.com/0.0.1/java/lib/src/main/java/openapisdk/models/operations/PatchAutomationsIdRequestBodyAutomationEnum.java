package openapisdk.models.operations;


public enum PatchAutomationsIdRequestBodyAutomationEnum {
    CREATE_FOLDER("create_folder"),
    REQUEST_FILE("request_file"),
    REQUEST_MOVE("request_move"),
    COPY_NEWEST_FILE("copy_newest_file"),
    DELETE_FILE("delete_file"),
    COPY_FILE("copy_file"),
    MOVE_FILE("move_file");

    public final String value;

    private PatchAutomationsIdRequestBodyAutomationEnum(String value) {
        this.value = value;
    }
}
