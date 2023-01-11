package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLookupSha1Sha1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sha1")
    public String sha1;
    public GetLookupSha1Sha1PathParams withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
}