package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeConfigurationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeConfigurationSetActionEnum action;
    public GetDescribeConfigurationSetQueryParams withAction(GetDescribeConfigurationSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetAttributeNames")
    public openapisdk.models.shared.ConfigurationSetAttributeEnum[] configurationSetAttributeNames;
    public GetDescribeConfigurationSetQueryParams withConfigurationSetAttributeNames(openapisdk.models.shared.ConfigurationSetAttributeEnum[] configurationSetAttributeNames) {
        this.configurationSetAttributeNames = configurationSetAttributeNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetDescribeConfigurationSetQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeConfigurationSetVersionEnum version;
    public GetDescribeConfigurationSetQueryParams withVersion(GetDescribeConfigurationSetVersionEnum version) {
        this.version = version;
        return this;
    }
}