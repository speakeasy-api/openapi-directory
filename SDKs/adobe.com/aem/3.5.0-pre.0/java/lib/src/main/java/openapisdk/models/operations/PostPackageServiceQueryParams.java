package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPackageServiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cmd")
    public String cmd;
    public PostPackageServiceQueryParams withCmd(String cmd) {
        this.cmd = cmd;
        return this;
    }
}