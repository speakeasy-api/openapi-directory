package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file")
    public String file;
    public ExportQueryParams withFile(String file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fmt")
    public ExportFmtEnum fmt;
    public ExportQueryParams withFmt(ExportFmtEnum fmt) {
        this.fmt = fmt;
        return this;
    }
}