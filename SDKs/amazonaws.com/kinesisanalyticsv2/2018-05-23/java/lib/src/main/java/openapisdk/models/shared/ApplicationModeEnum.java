package openapisdk.models.shared;


public enum ApplicationModeEnum {
    STREAMING("STREAMING"),
    INTERACTIVE("INTERACTIVE");

    public final String value;

    private ApplicationModeEnum(String value) {
        this.value = value;
    }
}
