package openapisdk.models.shared;


public enum ApiKeyEnum1 {
    SHARE("Share"),
    MODIFY("Modify"),
    USE_COMMERCIALLY("Use commercially"),
    ALL_RIGHTS_RESERVED("All rights reserved"),
    UNKNOWN("Unknown");

    public final String value;

    private ApiKeyEnum1(String value) {
        this.value = value;
    }
}
