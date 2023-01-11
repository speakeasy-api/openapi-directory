package openapisdk.models.shared;


public enum FileExistsBehaviorEnum {
    DISALLOW("DISALLOW"),
    OVERWRITE("OVERWRITE"),
    RETAIN("RETAIN");

    public final String value;

    private FileExistsBehaviorEnum(String value) {
        this.value = value;
    }
}
