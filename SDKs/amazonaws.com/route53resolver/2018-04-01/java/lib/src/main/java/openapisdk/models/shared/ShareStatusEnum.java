package openapisdk.models.shared;


public enum ShareStatusEnum {
    NOT_SHARED("NOT_SHARED"),
    SHARED_WITH_ME("SHARED_WITH_ME"),
    SHARED_BY_ME("SHARED_BY_ME");

    public final String value;

    private ShareStatusEnum(String value) {
        this.value = value;
    }
}
