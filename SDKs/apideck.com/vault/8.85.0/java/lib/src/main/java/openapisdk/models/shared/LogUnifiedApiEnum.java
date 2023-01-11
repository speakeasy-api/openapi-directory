package openapisdk.models.shared;


public enum LogUnifiedApiEnum {
    CRM("crm"),
    LEAD("lead"),
    PROXY("proxy"),
    VAULT("vault"),
    ACCOUNTING("accounting"),
    HRIS("hris"),
    ATS("ats"),
    POS("pos"),
    FILE_STORAGE("file-storage"),
    SMS("sms");

    public final String value;

    private LogUnifiedApiEnum(String value) {
        this.value = value;
    }
}
