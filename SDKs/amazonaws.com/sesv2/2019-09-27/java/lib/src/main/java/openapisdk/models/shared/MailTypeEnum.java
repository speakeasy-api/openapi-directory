package openapisdk.models.shared;


public enum MailTypeEnum {
    MARKETING("MARKETING"),
    TRANSACTIONAL("TRANSACTIONAL");

    public final String value;

    private MailTypeEnum(String value) {
        this.value = value;
    }
}
