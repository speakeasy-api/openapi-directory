package openapisdk.models.shared;


public enum CurationCommentTypeEnum {
    COMMENT("comment"),
    APPROVED("approved"),
    REJECTED("rejected"),
    CLOSED("closed");

    public final String value;

    private CurationCommentTypeEnum(String value) {
        this.value = value;
    }
}
