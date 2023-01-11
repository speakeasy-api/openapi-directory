package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public CopyAssignmentPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public CopyAssignmentPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}