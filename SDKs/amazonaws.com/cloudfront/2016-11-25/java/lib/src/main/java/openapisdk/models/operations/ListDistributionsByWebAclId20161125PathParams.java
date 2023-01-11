package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByWebAclId20161125PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WebACLId")
    public String webACLId;
    public ListDistributionsByWebAclId20161125PathParams withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}