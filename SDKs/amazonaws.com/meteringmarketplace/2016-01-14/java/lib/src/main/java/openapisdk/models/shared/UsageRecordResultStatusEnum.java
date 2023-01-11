package openapisdk.models.shared;


public enum UsageRecordResultStatusEnum {
    SUCCESS("Success"),
    CUSTOMER_NOT_SUBSCRIBED("CustomerNotSubscribed"),
    DUPLICATE_RECORD("DuplicateRecord");

    public final String value;

    private UsageRecordResultStatusEnum(String value) {
        this.value = value;
    }
}
