package openapisdk.models.shared;


public enum SubmissionEntryFromTypeEnum {
    INTERNATIONAL("INTERNATIONAL"),
    ALPHANUMERIC("ALPHANUMERIC"),
    SHORTCODE("SHORTCODE"),
    REPLIABLE("REPLIABLE");

    public final String value;

    private SubmissionEntryFromTypeEnum(String value) {
        this.value = value;
    }
}
