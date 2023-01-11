package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlmawsV1TaskListsPrintoutsPrintoutIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=printout_id")
    public String printoutId;
    public GetAlmawsV1TaskListsPrintoutsPrintoutIdPathParams withPrintoutId(String printoutId) {
        this.printoutId = printoutId;
        return this;
    }
}