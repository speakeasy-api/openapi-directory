package openapisdk.models.shared;


public enum ExportSnapshotRecordSourceTypeEnum {
    INSTANCE_SNAPSHOT("InstanceSnapshot"),
    DISK_SNAPSHOT("DiskSnapshot");

    public final String value;

    private ExportSnapshotRecordSourceTypeEnum(String value) {
        this.value = value;
    }
}
