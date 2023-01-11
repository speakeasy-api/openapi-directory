package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSubmissionsReviewsAsCsvPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public ExportSubmissionsReviewsAsCsvPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public ExportSubmissionsReviewsAsCsvPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
}