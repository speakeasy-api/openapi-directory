package openapisdk.models.shared;



/**
 * SnapshotScheduleList
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
**/
public class SnapshotScheduleList {
    public Long associatedClusterCount;
    public SnapshotScheduleList withAssociatedClusterCount(Long associatedClusterCount) {
        this.associatedClusterCount = associatedClusterCount;
        return this;
    }
    public AssociatedClusterList[] associatedClusters;
    public SnapshotScheduleList withAssociatedClusters(AssociatedClusterList[] associatedClusters) {
        this.associatedClusters = associatedClusters;
        return this;
    }
    public java.util.Map<String, Object>[] nextInvocations;
    public SnapshotScheduleList withNextInvocations(java.util.Map<String, Object>[] nextInvocations) {
        this.nextInvocations = nextInvocations;
        return this;
    }
    public java.util.Map<String, Object>[] scheduleDefinitions;
    public SnapshotScheduleList withScheduleDefinitions(java.util.Map<String, Object>[] scheduleDefinitions) {
        this.scheduleDefinitions = scheduleDefinitions;
        return this;
    }
    public String scheduleDescription;
    public SnapshotScheduleList withScheduleDescription(String scheduleDescription) {
        this.scheduleDescription = scheduleDescription;
        return this;
    }
    public String scheduleIdentifier;
    public SnapshotScheduleList withScheduleIdentifier(String scheduleIdentifier) {
        this.scheduleIdentifier = scheduleIdentifier;
        return this;
    }
    public TagList[] tags;
    public SnapshotScheduleList withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}