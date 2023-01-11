package openapisdk.models.shared;


public enum QualificationStatusEnum {
    GRANTED("Granted"),
    REVOKED("Revoked");

    public final String value;

    private QualificationStatusEnum(String value) {
        this.value = value;
    }
}
