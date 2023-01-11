package openapisdk.models.shared;


public enum BackupStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    READY("READY"),
    DELETED("DELETED"),
    PENDING_DELETION("PENDING_DELETION");

    public final String value;

    private BackupStateEnum(String value) {
        this.value = value;
    }
}
