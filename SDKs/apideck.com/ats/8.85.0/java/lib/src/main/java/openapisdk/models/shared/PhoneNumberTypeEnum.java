package openapisdk.models.shared;


public enum PhoneNumberTypeEnum {
    PRIMARY("primary"),
    SECONDARY("secondary"),
    HOME("home"),
    WORK("work"),
    OFFICE("office"),
    MOBILE("mobile"),
    ASSISTANT("assistant"),
    FAX("fax"),
    DIRECT_DIAL_IN("direct-dial-in"),
    PERSONAL("personal"),
    OTHER("other");

    public final String value;

    private PhoneNumberTypeEnum(String value) {
        this.value = value;
    }
}
