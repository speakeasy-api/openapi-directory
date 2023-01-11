package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssignmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public ListAssignmentsPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}