package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlmawsV1TaskListsPrintoutsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=letter")
    public String letter;
    public GetAlmawsV1TaskListsPrintoutsQueryParams withLetter(String letter) {
        this.letter = letter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetAlmawsV1TaskListsPrintoutsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetAlmawsV1TaskListsPrintoutsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printer_id")
    public String printerId;
    public GetAlmawsV1TaskListsPrintoutsQueryParams withPrinterId(String printerId) {
        this.printerId = printerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printout_id")
    public String printoutId;
    public GetAlmawsV1TaskListsPrintoutsQueryParams withPrintoutId(String printoutId) {
        this.printoutId = printoutId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetAlmawsV1TaskListsPrintoutsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}