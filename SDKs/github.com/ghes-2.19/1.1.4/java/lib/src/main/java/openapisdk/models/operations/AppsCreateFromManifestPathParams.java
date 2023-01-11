package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateFromManifestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=code")
    public String code;
    public AppsCreateFromManifestPathParams withCode(String code) {
        this.code = code;
        return this;
    }
}