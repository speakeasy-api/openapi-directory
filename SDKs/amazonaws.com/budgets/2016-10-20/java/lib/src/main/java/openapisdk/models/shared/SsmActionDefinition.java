package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SsmActionDefinition
 *  The AWS Systems Manager (SSM) action definition details. 
**/
public class SsmActionDefinition {
    @JsonProperty("ActionSubType")
    public ActionSubTypeEnum actionSubType;
    public SsmActionDefinition withActionSubType(ActionSubTypeEnum actionSubType) {
        this.actionSubType = actionSubType;
        return this;
    }
    @JsonProperty("InstanceIds")
    public String[] instanceIds;
    public SsmActionDefinition withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @JsonProperty("Region")
    public String region;
    public SsmActionDefinition withRegion(String region) {
        this.region = region;
        return this;
    }
}