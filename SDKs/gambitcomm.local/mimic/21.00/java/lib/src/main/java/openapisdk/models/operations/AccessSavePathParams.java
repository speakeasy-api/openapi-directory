package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessSavePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filename")
    public String filename;
    public AccessSavePathParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
}