package openapisdk.models.shared;


public enum TlsPolicyEnum {
    REQUIRE("REQUIRE"),
    OPTIONAL("OPTIONAL");

    public final String value;

    private TlsPolicyEnum(String value) {
        this.value = value;
    }
}
