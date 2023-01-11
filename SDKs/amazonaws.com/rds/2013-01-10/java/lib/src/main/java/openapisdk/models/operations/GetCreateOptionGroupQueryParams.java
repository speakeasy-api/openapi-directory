package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateOptionGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateOptionGroupActionEnum action;
    public GetCreateOptionGroupQueryParams withAction(GetCreateOptionGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineName")
    public String engineName;
    public GetCreateOptionGroupQueryParams withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MajorEngineVersion")
    public String majorEngineVersion;
    public GetCreateOptionGroupQueryParams withMajorEngineVersion(String majorEngineVersion) {
        this.majorEngineVersion = majorEngineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupDescription")
    public String optionGroupDescription;
    public GetCreateOptionGroupQueryParams withOptionGroupDescription(String optionGroupDescription) {
        this.optionGroupDescription = optionGroupDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetCreateOptionGroupQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateOptionGroupVersionEnum version;
    public GetCreateOptionGroupQueryParams withVersion(GetCreateOptionGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}