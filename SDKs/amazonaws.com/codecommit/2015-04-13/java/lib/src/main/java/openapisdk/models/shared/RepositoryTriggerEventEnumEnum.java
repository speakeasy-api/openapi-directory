package openapisdk.models.shared;


public enum RepositoryTriggerEventEnumEnum {
    ALL("all"),
    UPDATE_REFERENCE("updateReference"),
    CREATE_REFERENCE("createReference"),
    DELETE_REFERENCE("deleteReference");

    public final String value;

    private RepositoryTriggerEventEnumEnum(String value) {
        this.value = value;
    }
}
