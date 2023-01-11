package openapisdk.models.shared;


public enum StageEnum {
    PRODUCTION("PRODUCTION"),
    BETA("BETA"),
    DEVELOPMENT("DEVELOPMENT"),
    EXPERIMENTAL("EXPERIMENTAL"),
    PULL_REQUEST("PULL_REQUEST");

    public final String value;

    private StageEnum(String value) {
        this.value = value;
    }
}
