package openapisdk.models.operations;


public enum CreateBranchRequestBodyStageEnum {
    PRODUCTION("PRODUCTION"),
    BETA("BETA"),
    DEVELOPMENT("DEVELOPMENT"),
    EXPERIMENTAL("EXPERIMENTAL"),
    PULL_REQUEST("PULL_REQUEST");

    public final String value;

    private CreateBranchRequestBodyStageEnum(String value) {
        this.value = value;
    }
}
