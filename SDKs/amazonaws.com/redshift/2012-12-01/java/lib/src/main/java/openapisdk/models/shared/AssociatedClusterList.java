package openapisdk.models.shared;



/**
 * AssociatedClusterList
 * <p/>
**/
public class AssociatedClusterList {
    public String clusterIdentifier;
    public AssociatedClusterList withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public ScheduleStateEnum scheduleAssociationState;
    public AssociatedClusterList withScheduleAssociationState(ScheduleStateEnum scheduleAssociationState) {
        this.scheduleAssociationState = scheduleAssociationState;
        return this;
    }
}