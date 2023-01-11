package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAlmawsV1TaskListsPrintoutsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=letter")
    public String letter;
    public PostAlmawsV1TaskListsPrintoutsQueryParams withLetter(String letter) {
        this.letter = letter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=op")
    public String op;
    public PostAlmawsV1TaskListsPrintoutsQueryParams withOp(String op) {
        this.op = op;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printer_id")
    public String printerId;
    public PostAlmawsV1TaskListsPrintoutsQueryParams withPrinterId(String printerId) {
        this.printerId = printerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printout_id")
    public String printoutId;
    public PostAlmawsV1TaskListsPrintoutsQueryParams withPrintoutId(String printoutId) {
        this.printoutId = printoutId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public PostAlmawsV1TaskListsPrintoutsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}