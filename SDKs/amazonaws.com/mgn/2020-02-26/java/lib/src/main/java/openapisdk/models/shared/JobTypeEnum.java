package openapisdk.models.shared;


public enum JobTypeEnum {
    LAUNCH("LAUNCH"),
    TERMINATE("TERMINATE");

    public final String value;

    private JobTypeEnum(String value) {
        this.value = value;
    }
}
