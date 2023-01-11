package openapisdk.models.shared;


public enum StandardIdentifierEnum {
    PROFILE("PROFILE"),
    ASSET("ASSET"),
    CASE_("CASE"),
    UNIQUE("UNIQUE"),
    SECONDARY("SECONDARY"),
    LOOKUP_ONLY("LOOKUP_ONLY"),
    NEW_ONLY("NEW_ONLY");

    public final String value;

    private StandardIdentifierEnum(String value) {
        this.value = value;
    }
}
