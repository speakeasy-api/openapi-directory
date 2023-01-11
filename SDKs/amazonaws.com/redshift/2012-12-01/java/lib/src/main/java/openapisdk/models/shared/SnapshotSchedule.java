package openapisdk.models.shared;



/**
 * SnapshotSchedule
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
**/
public class SnapshotSchedule {
    public Long associatedClusterCount;
    public SnapshotSchedule withAssociatedClusterCount(Long associatedClusterCount) {
        this.associatedClusterCount = associatedClusterCount;
        return this;
    }
    public AssociatedClusterList[] associatedClusters;
    public SnapshotSchedule withAssociatedClusters(AssociatedClusterList[] associatedClusters) {
        this.associatedClusters = associatedClusters;
        return this;
    }
    public java.util.Map<String, Object>[] nextInvocations;
    public SnapshotSchedule withNextInvocations(java.util.Map<String, Object>[] nextInvocations) {
        this.nextInvocations = nextInvocations;
        return this;
    }
    public java.util.Map<String, Object>[] scheduleDefinitions;
    public SnapshotSchedule withScheduleDefinitions(java.util.Map<String, Object>[] scheduleDefinitions) {
        this.scheduleDefinitions = scheduleDefinitions;
        return this;
    }
    public String scheduleDescription;
    public SnapshotSchedule withScheduleDescription(String scheduleDescription) {
        this.scheduleDescription = scheduleDescription;
        return this;
    }
    public String scheduleIdentifier;
    public SnapshotSchedule withScheduleIdentifier(String scheduleIdentifier) {
        this.scheduleIdentifier = scheduleIdentifier;
        return this;
    }
    public TagList[] tags;
    public SnapshotSchedule withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}