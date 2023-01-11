package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordsFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public openapisdk.models.shared.FormatEnum format;
    public GetRecordsFormatPathParams withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
}