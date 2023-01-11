package openapisdk.models.shared;


public enum JobTypeEnum {
    ONE_TIME("ONE_TIME"),
    SCHEDULED("SCHEDULED");

    public final String value;

    private JobTypeEnum(String value) {
        this.value = value;
    }
}
