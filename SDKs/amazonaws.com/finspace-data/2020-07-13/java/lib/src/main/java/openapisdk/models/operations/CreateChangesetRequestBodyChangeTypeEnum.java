package openapisdk.models.operations;


public enum CreateChangesetRequestBodyChangeTypeEnum {
    REPLACE("REPLACE"),
    APPEND("APPEND"),
    MODIFY("MODIFY");

    public final String value;

    private CreateChangesetRequestBodyChangeTypeEnum(String value) {
        this.value = value;
    }
}
