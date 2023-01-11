package openapisdk.models.shared;


public enum TlsPolicyEnum {
    REQUIRE("Require"),
    OPTIONAL("Optional");

    public final String value;

    private TlsPolicyEnum(String value) {
        this.value = value;
    }
}
