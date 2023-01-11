package openapisdk.models.operations;


public enum PostV1OrderFeedbackActionEnum {
    APPROVE("APPROVE"),
    REJECT("REJECT"),
    REJECT_BLACKLIST("REJECT_BLACKLIST");

    public final String value;

    private PostV1OrderFeedbackActionEnum(String value) {
        this.value = value;
    }
}
