package openapisdk.models.shared;


public enum ApplicationRevisionSortByEnum {
    REGISTER_TIME("registerTime"),
    FIRST_USED_TIME("firstUsedTime"),
    LAST_USED_TIME("lastUsedTime");

    public final String value;

    private ApplicationRevisionSortByEnum(String value) {
        this.value = value;
    }
}
