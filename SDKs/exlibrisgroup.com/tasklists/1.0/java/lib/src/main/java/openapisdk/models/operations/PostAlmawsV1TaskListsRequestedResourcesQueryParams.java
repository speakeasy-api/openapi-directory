package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAlmawsV1TaskListsRequestedResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=circ_desk")
    public String circDesk;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withCircDesk(String circDesk) {
        this.circDesk = circDesk;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=library")
    public String library;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withLibrary(String library) {
        this.library = library;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=op")
    public String op;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withOp(String op) {
        this.op = op;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pickup_inst")
    public String pickupInst;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withPickupInst(String pickupInst) {
        this.pickupInst = pickupInst;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printed")
    public String printed;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withPrinted(String printed) {
        this.printed = printed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reported")
    public String reported;
    public PostAlmawsV1TaskListsRequestedResourcesQueryParams withReported(String reported) {
        this.reported = reported;
        return this;
    }
}