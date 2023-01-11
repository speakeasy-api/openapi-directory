package openapisdk.models.shared;


public enum PhaseStatusEnum {
    PENDING("PENDING"),
    SUCCESS("SUCCESS"),
    ERROR("ERROR");

    public final String value;

    private PhaseStatusEnum(String value) {
        this.value = value;
    }
}
