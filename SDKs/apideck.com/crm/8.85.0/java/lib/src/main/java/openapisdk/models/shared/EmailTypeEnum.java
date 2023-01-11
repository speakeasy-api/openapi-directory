package openapisdk.models.shared;


public enum EmailTypeEnum {
    PRIMARY("primary"),
    SECONDARY("secondary"),
    WORK("work"),
    PERSONAL("personal"),
    BILLING("billing"),
    OTHER("other");

    public final String value;

    private EmailTypeEnum(String value) {
        this.value = value;
    }
}
