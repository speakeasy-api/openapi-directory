package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MediaTabularExtractsheetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arg1")
    public String arg1;
    public MediaTabularExtractsheetQueryParams withArg1(String arg1) {
        this.arg1 = arg1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryid")
    public String entryid;
    public MediaTabularExtractsheetQueryParams withEntryid(String entryid) {
        this.entryid = entryid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public String output;
    public MediaTabularExtractsheetQueryParams withOutput(String output) {
        this.output = output;
        return this;
    }
}