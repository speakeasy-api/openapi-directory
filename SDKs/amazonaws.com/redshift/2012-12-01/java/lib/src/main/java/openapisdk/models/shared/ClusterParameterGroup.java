package openapisdk.models.shared;



/**
 * ClusterParameterGroup
 * Describes a parameter group.
**/
public class ClusterParameterGroup {
    public String description;
    public ClusterParameterGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    public String parameterGroupFamily;
    public ClusterParameterGroup withParameterGroupFamily(String parameterGroupFamily) {
        this.parameterGroupFamily = parameterGroupFamily;
        return this;
    }
    public String parameterGroupName;
    public ClusterParameterGroup withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    public TagList[] tags;
    public ClusterParameterGroup withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}