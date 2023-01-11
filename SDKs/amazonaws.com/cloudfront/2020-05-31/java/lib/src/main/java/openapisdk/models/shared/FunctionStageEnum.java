package openapisdk.models.shared;


public enum FunctionStageEnum {
    DEVELOPMENT("DEVELOPMENT"),
    LIVE("LIVE");

    public final String value;

    private FunctionStageEnum(String value) {
        this.value = value;
    }
}
