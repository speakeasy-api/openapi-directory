package openapisdk.models.operations;


public enum UpdateBranchRequestBodyStageEnum {
    PRODUCTION("PRODUCTION"),
    BETA("BETA"),
    DEVELOPMENT("DEVELOPMENT"),
    EXPERIMENTAL("EXPERIMENTAL"),
    PULL_REQUEST("PULL_REQUEST");

    public final String value;

    private UpdateBranchRequestBodyStageEnum(String value) {
        this.value = value;
    }
}
