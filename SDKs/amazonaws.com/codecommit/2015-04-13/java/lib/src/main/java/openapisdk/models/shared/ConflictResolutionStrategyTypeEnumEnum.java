package openapisdk.models.shared;


public enum ConflictResolutionStrategyTypeEnumEnum {
    NONE("NONE"),
    ACCEPT_SOURCE("ACCEPT_SOURCE"),
    ACCEPT_DESTINATION("ACCEPT_DESTINATION"),
    AUTOMERGE("AUTOMERGE");

    public final String value;

    private ConflictResolutionStrategyTypeEnumEnum(String value) {
        this.value = value;
    }
}
