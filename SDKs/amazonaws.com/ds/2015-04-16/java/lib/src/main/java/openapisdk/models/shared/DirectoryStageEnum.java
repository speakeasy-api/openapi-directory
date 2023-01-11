package openapisdk.models.shared;


public enum DirectoryStageEnum {
    REQUESTED("Requested"),
    CREATING("Creating"),
    CREATED("Created"),
    ACTIVE("Active"),
    INOPERABLE("Inoperable"),
    IMPAIRED("Impaired"),
    RESTORING("Restoring"),
    RESTORE_FAILED("RestoreFailed"),
    DELETING("Deleting"),
    DELETED("Deleted"),
    FAILED("Failed");

    public final String value;

    private DirectoryStageEnum(String value) {
        this.value = value;
    }
}
