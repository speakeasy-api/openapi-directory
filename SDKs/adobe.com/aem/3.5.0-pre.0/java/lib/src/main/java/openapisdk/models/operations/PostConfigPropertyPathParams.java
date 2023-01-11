package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigPropertyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configNodeName")
    public String configNodeName;
    public PostConfigPropertyPathParams withConfigNodeName(String configNodeName) {
        this.configNodeName = configNodeName;
        return this;
    }
}