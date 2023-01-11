package openapisdk.models.shared;


public enum FileMigrationEntityOperationEnum {
    DELETE("delete"),
    MOVE("move"),
    COPY("copy");

    public final String value;

    private FileMigrationEntityOperationEnum(String value) {
        this.value = value;
    }
}
