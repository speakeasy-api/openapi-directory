package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnarchiveAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public UnarchiveAssignmentPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public UnarchiveAssignmentPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}