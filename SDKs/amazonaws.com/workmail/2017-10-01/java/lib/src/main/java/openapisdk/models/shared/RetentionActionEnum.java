package openapisdk.models.shared;


public enum RetentionActionEnum {
    NONE("NONE"),
    DELETE("DELETE"),
    PERMANENTLY_DELETE("PERMANENTLY_DELETE");

    public final String value;

    private RetentionActionEnum(String value) {
        this.value = value;
    }
}
