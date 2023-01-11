package openapisdk.models.shared;



/**
 * ParameterGroupList
 * Describes a parameter group.
**/
public class ParameterGroupList {
    public String description;
    public ParameterGroupList withDescription(String description) {
        this.description = description;
        return this;
    }
    public String parameterGroupFamily;
    public ParameterGroupList withParameterGroupFamily(String parameterGroupFamily) {
        this.parameterGroupFamily = parameterGroupFamily;
        return this;
    }
    public String parameterGroupName;
    public ParameterGroupList withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    public TagList[] tags;
    public ParameterGroupList withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}