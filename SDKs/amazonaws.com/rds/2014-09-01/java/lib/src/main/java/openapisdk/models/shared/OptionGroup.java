package openapisdk.models.shared;



public class OptionGroup {
    public Boolean allowsVpcAndNonVpcInstanceMemberships;
    public OptionGroup withAllowsVpcAndNonVpcInstanceMemberships(Boolean allowsVpcAndNonVpcInstanceMemberships) {
        this.allowsVpcAndNonVpcInstanceMemberships = allowsVpcAndNonVpcInstanceMemberships;
        return this;
    }
    public String engineName;
    public OptionGroup withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    public String majorEngineVersion;
    public OptionGroup withMajorEngineVersion(String majorEngineVersion) {
        this.majorEngineVersion = majorEngineVersion;
        return this;
    }
    public String optionGroupDescription;
    public OptionGroup withOptionGroupDescription(String optionGroupDescription) {
        this.optionGroupDescription = optionGroupDescription;
        return this;
    }
    public String optionGroupName;
    public OptionGroup withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    public OptionsList[] options;
    public OptionGroup withOptions(OptionsList[] options) {
        this.options = options;
        return this;
    }
    public String vpcId;
    public OptionGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}