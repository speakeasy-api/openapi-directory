package openapisdk.models.shared;


public enum MergeOptionTypeEnumEnum {
    FAST_FORWARD_MERGE("FAST_FORWARD_MERGE"),
    SQUASH_MERGE("SQUASH_MERGE"),
    THREE_WAY_MERGE("THREE_WAY_MERGE");

    public final String value;

    private MergeOptionTypeEnumEnum(String value) {
        this.value = value;
    }
}
