package openapisdk.models.shared;


public enum ChangeActionEnum {
    INSERT("INSERT"),
    DELETE("DELETE");

    public final String value;

    private ChangeActionEnum(String value) {
        this.value = value;
    }
}
