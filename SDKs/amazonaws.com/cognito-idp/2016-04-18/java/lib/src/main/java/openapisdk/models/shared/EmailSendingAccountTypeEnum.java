package openapisdk.models.shared;


public enum EmailSendingAccountTypeEnum {
    COGNITO_DEFAULT("COGNITO_DEFAULT"),
    DEVELOPER("DEVELOPER");

    public final String value;

    private EmailSendingAccountTypeEnum(String value) {
        this.value = value;
    }
}
