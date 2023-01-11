package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLookupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=md5")
    public String md5;
    public GetLookupPathParams withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
}