package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionsForTeacherQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_before")
    public String endingBefore;
    public GetSectionsForTeacherQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSectionsForTeacherQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starting_after")
    public String startingAfter;
    public GetSectionsForTeacherQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
}