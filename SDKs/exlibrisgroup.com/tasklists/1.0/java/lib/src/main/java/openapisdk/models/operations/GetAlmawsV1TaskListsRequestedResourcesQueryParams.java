package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlmawsV1TaskListsRequestedResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=circ_desk")
    public String circDesk;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withCircDesk(String circDesk) {
        this.circDesk = circDesk;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public String direction;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=library")
    public String library;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withLibrary(String library) {
        this.library = library;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public String orderBy;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pickup_inst")
    public String pickupInst;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withPickupInst(String pickupInst) {
        this.pickupInst = pickupInst;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printed")
    public String printed;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withPrinted(String printed) {
        this.printed = printed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reported")
    public String reported;
    public GetAlmawsV1TaskListsRequestedResourcesQueryParams withReported(String reported) {
        this.reported = reported;
        return this;
    }
}