package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationSetSuppressionOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public PutConfigurationSetSuppressionOptionsPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}