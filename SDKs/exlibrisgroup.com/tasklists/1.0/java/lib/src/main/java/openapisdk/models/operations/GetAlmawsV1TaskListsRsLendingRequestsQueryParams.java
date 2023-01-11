package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlmawsV1TaskListsRsLendingRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=library")
    public String library;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withLibrary(String library) {
        this.library = library;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partner")
    public String partner;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withPartner(String partner) {
        this.partner = partner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printed")
    public String printed;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withPrinted(String printed) {
        this.printed = printed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reported")
    public String reported;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withReported(String reported) {
        this.reported = reported;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requested_format")
    public String requestedFormat;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withRequestedFormat(String requestedFormat) {
        this.requestedFormat = requestedFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supplied_format")
    public String suppliedFormat;
    public GetAlmawsV1TaskListsRsLendingRequestsQueryParams withSuppliedFormat(String suppliedFormat) {
        this.suppliedFormat = suppliedFormat;
        return this;
    }
}