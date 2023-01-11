package openapisdk.models.shared;



public class DescribeSnapshotSchedulesOutputMessage {
    public String marker;
    public DescribeSnapshotSchedulesOutputMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public SnapshotScheduleList[] snapshotSchedules;
    public DescribeSnapshotSchedulesOutputMessage withSnapshotSchedules(SnapshotScheduleList[] snapshotSchedules) {
        this.snapshotSchedules = snapshotSchedules;
        return this;
    }
}