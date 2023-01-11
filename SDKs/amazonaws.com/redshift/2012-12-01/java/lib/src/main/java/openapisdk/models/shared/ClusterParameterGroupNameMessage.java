package openapisdk.models.shared;



/**
 * ClusterParameterGroupNameMessage
 * <p/>
**/
public class ClusterParameterGroupNameMessage {
    public String parameterGroupName;
    public ClusterParameterGroupNameMessage withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    public String parameterGroupStatus;
    public ClusterParameterGroupNameMessage withParameterGroupStatus(String parameterGroupStatus) {
        this.parameterGroupStatus = parameterGroupStatus;
        return this;
    }
}