package openapisdk.models.shared;


public enum RemoteServerEntityAuthStatusEnum {
    NOT_APPLICABLE("not_applicable"),
    IN_SETUP("in_setup"),
    COMPLETE("complete"),
    REAUTHENTICATE("reauthenticate");

    public final String value;

    private RemoteServerEntityAuthStatusEnum(String value) {
        this.value = value;
    }
}
