package openapisdk.models.shared;


public enum OtaUpdateStatusEnum {
    CREATE_PENDING("CREATE_PENDING"),
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    CREATE_COMPLETE("CREATE_COMPLETE"),
    CREATE_FAILED("CREATE_FAILED");

    public final String value;

    private OtaUpdateStatusEnum(String value) {
        this.value = value;
    }
}
