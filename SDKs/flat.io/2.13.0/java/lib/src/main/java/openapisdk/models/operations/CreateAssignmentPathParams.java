package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public CreateAssignmentPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}