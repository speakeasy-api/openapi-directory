package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordsRecordIdJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetRecordsRecordIdJsonQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String fields;
    public GetRecordsRecordIdJsonQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetRecordsRecordIdJsonFormatEnum format;
    public GetRecordsRecordIdJsonQueryParams withFormat(GetRecordsRecordIdJsonFormatEnum format) {
        this.format = format;
        return this;
    }
}