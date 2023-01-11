package openapisdk.models.shared;



/**
 * ClusterParameterGroupsMessage
 * Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
**/
public class ClusterParameterGroupsMessage {
    public String marker;
    public ClusterParameterGroupsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParameterGroupList[] parameterGroups;
    public ClusterParameterGroupsMessage withParameterGroups(ParameterGroupList[] parameterGroups) {
        this.parameterGroups = parameterGroups;
        return this;
    }
}