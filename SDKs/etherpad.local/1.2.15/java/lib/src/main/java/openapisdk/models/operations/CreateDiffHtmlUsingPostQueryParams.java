package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiffHtmlUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endRev")
    public String endRev;
    public CreateDiffHtmlUsingPostQueryParams withEndRev(String endRev) {
        this.endRev = endRev;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public CreateDiffHtmlUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startRev")
    public String startRev;
    public CreateDiffHtmlUsingPostQueryParams withStartRev(String startRev) {
        this.startRev = startRev;
        return this;
    }
}