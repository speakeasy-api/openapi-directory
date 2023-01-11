package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeachersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_before")
    public String endingBefore;
    public GetTeachersQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTeachersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starting_after")
    public String startingAfter;
    public GetTeachersQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=where")
    public String where;
    public GetTeachersQueryParams withWhere(String where) {
        this.where = where;
        return this;
    }
}