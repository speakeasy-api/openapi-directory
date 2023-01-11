package openapisdk.models.shared;



/**
 * FailoverState
 * Contains the state of scheduled or in-process failover operations on an Aurora global database (<a>GlobalCluster</a>). This Data type is empty unless a failover operation is scheduled or is currently underway on the Aurora global database. 
**/
public class FailoverState {
    public String fromDbClusterArn;
    public FailoverState withFromDbClusterArn(String fromDbClusterArn) {
        this.fromDbClusterArn = fromDbClusterArn;
        return this;
    }
    public FailoverStatusEnum status;
    public FailoverState withStatus(FailoverStatusEnum status) {
        this.status = status;
        return this;
    }
    public String toDbClusterArn;
    public FailoverState withToDbClusterArn(String toDbClusterArn) {
        this.toDbClusterArn = toDbClusterArn;
        return this;
    }
}