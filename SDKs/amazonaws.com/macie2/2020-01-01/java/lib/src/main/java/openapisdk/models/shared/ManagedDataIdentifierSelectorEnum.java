package openapisdk.models.shared;


public enum ManagedDataIdentifierSelectorEnum {
    ALL("ALL"),
    EXCLUDE("EXCLUDE"),
    INCLUDE("INCLUDE"),
    NONE("NONE");

    public final String value;

    private ManagedDataIdentifierSelectorEnum(String value) {
        this.value = value;
    }
}
