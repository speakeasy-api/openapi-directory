package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConfigurationSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeConfigurationSettingsActionEnum action;
    public PostDescribeConfigurationSettingsQueryParams withAction(PostDescribeConfigurationSettingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeConfigurationSettingsVersionEnum version;
    public PostDescribeConfigurationSettingsQueryParams withVersion(PostDescribeConfigurationSettingsVersionEnum version) {
        this.version = version;
        return this;
    }
}