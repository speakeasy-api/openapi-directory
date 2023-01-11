package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateClassPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public ActivateClassPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}