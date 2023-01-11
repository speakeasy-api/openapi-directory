package openapisdk.models.shared;


public enum ChangeTypeEnum {
    REPLACE("REPLACE"),
    APPEND("APPEND"),
    MODIFY("MODIFY");

    public final String value;

    private ChangeTypeEnum(String value) {
        this.value = value;
    }
}
