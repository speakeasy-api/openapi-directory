package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiffHtmlUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endRev")
    public String endRev;
    public CreateDiffHtmlUsingGetQueryParams withEndRev(String endRev) {
        this.endRev = endRev;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public CreateDiffHtmlUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startRev")
    public String startRev;
    public CreateDiffHtmlUsingGetQueryParams withStartRev(String startRev) {
        this.startRev = startRev;
        return this;
    }
}