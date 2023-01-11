package openapisdk.models.shared;


public enum UpdateActionTypeEnum {
    CREATE_OR_UPDATE("CREATE_OR_UPDATE"),
    DELETE("DELETE");

    public final String value;

    private UpdateActionTypeEnum(String value) {
        this.value = value;
    }
}
