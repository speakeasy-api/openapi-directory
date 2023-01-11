package openapisdk.models.operations;


public enum PostReportsOptionEnum {
    VALIDATE_PAYLOAD("ValidatePayload"),
    CHECK_CONNECTIONS("CheckConnections"),
    SEND_IMMEDIATELY("SendImmediately"),
    SKIP_SEND("SkipSend"),
    SKIP_INVALID_ITEMS("SkipInvalidItems");

    public final String value;

    private PostReportsOptionEnum(String value) {
        this.value = value;
    }
}
