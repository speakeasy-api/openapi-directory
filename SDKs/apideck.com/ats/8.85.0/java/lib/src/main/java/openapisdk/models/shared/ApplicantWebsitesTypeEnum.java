package openapisdk.models.shared;


public enum ApplicantWebsitesTypeEnum {
    PRIMARY("primary"),
    SECONDARY("secondary"),
    WORK("work"),
    PERSONAL("personal"),
    OTHER("other");

    public final String value;

    private ApplicantWebsitesTypeEnum(String value) {
        this.value = value;
    }
}
