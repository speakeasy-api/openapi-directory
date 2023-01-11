package openapisdk.models.shared;


public enum ParticipantRoleEnum {
    AGENT("AGENT"),
    CUSTOMER("CUSTOMER"),
    SYSTEM("SYSTEM");

    public final String value;

    private ParticipantRoleEnum(String value) {
        this.value = value;
    }
}
