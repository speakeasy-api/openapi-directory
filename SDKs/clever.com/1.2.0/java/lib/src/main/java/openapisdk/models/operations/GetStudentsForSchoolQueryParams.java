package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentsForSchoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_before")
    public String endingBefore;
    public GetStudentsForSchoolQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetStudentsForSchoolQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starting_after")
    public String startingAfter;
    public GetStudentsForSchoolQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=where")
    public String where;
    public GetStudentsForSchoolQueryParams withWhere(String where) {
        this.where = where;
        return this;
    }
}