package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImportJobRequestBodyImportDataSource
 * An object that contains details about the data source of the import job.
**/
public class CreateImportJobRequestBodyImportDataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormat")
    public openapisdk.models.shared.DataFormatEnum dataFormat;
    public CreateImportJobRequestBodyImportDataSource withDataFormat(openapisdk.models.shared.DataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Url")
    public String s3Url;
    public CreateImportJobRequestBodyImportDataSource withS3Url(String s3Url) {
        this.s3Url = s3Url;
        return this;
    }
}