package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByWebAclId20180618PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WebACLId")
    public String webACLId;
    public ListDistributionsByWebAclId20180618PathParams withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}