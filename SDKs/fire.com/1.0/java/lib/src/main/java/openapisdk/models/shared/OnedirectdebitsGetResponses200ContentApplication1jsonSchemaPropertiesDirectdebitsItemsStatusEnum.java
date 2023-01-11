package openapisdk.models.shared;


public enum OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum {
    RECIEVED("RECIEVED"),
    REJECT_REQUESTED("REJECT_REQUESTED"),
    REJECT_READY_FOR_PROCESSING("REJECT_READY_FOR_PROCESSING"),
    REJECT_RECORD_IN_PROGRESS("REJECT_RECORD_IN_PROGRESS"),
    REJECT_RECORDED("REJECT_RECORDED"),
    REJECT_FILE_CREATED("REJECT_FILE_CREATED"),
    REJECT_FILE_SENT("REJECT_FILE_SENT"),
    COLLECTED("COLLECTED"),
    REFUND_REQUESTED("REFUND_REQUESTED"),
    REFUND_RECORD_IN_PROGRESS("REFUND_RECORD_IN_PROGRESS"),
    REFUND_RECORDED("REFUND_RECORDED"),
    REFUND_FILE_CREATED("REFUND_FILE_CREATED"),
    REFUND_FILE_SENT("REFUND_FILE_SENT");

    public final String value;

    private OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum(String value) {
        this.value = value;
    }
}
