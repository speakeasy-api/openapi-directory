package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3BoardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=board_relationship")
    public openapisdk.models.shared.BoardRelationshipEnum boardRelationship;
    public GetV3BoardsQueryParams withBoardRelationship(openapisdk.models.shared.BoardRelationshipEnum boardRelationship) {
        this.boardRelationship = boardRelationship;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3BoardsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetV3BoardsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.BoardSortOrderEnum sortOrder;
    public GetV3BoardsQueryParams withSortOrder(openapisdk.models.shared.BoardSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}