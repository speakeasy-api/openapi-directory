package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessLoadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filename")
    public String filename;
    public AccessLoadPathParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
}