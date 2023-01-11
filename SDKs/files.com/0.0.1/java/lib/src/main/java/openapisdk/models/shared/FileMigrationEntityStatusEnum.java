package openapisdk.models.shared;


public enum FileMigrationEntityStatusEnum {
    PENDING("pending"),
    COUNTING("counting"),
    PROCESSING("processing"),
    COMPLETE("complete"),
    PROCESSING_SUBFOLDERS("processing_subfolders"),
    FINISHING("finishing"),
    CREATING_DEST_FOLDER("creating_dest_folder"),
    WAITING_FOR_OTHER_JOBS("waiting_for_other_jobs"),
    WAITING_FOR_ALL_FILES("waiting_for_all_files"),
    WAITING_FOR_PENDING_SUBFOLDERS("waiting_for_pending_subfolders"),
    WAITING_FOR_ALL_SUBFOLDERS("waiting_for_all_subfolders"),
    FAILED("failed"),
    WAITING_FOR_ENQUEUED_OPERATIONS("waiting_for_enqueued_operations"),
    PROCESSING_DEFERRED_FOLDERS("processing_deferred_folders"),
    PROCESSING_RECURSIVELY("processing_recursively"),
    REMOVING_DEFERRED_FOLDERS("removing_deferred_folders");

    public final String value;

    private FileMigrationEntityStatusEnum(String value) {
        this.value = value;
    }
}
