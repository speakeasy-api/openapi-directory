package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnarchiveClassPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public UnarchiveClassPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}