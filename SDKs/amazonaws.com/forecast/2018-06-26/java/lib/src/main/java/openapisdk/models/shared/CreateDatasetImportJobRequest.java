package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetImportJobRequest {
    @JsonProperty("DataSource")
    public DataSource dataSource;
    public CreateDatasetImportJobRequest withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("DatasetArn")
    public String datasetArn;
    public CreateDatasetImportJobRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonProperty("DatasetImportJobName")
    public String datasetImportJobName;
    public CreateDatasetImportJobRequest withDatasetImportJobName(String datasetImportJobName) {
        this.datasetImportJobName = datasetImportJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeolocationFormat")
    public String geolocationFormat;
    public CreateDatasetImportJobRequest withGeolocationFormat(String geolocationFormat) {
        this.geolocationFormat = geolocationFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateDatasetImportJobRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeZone")
    public String timeZone;
    public CreateDatasetImportJobRequest withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampFormat")
    public String timestampFormat;
    public CreateDatasetImportJobRequest withTimestampFormat(String timestampFormat) {
        this.timestampFormat = timestampFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseGeolocationForTimeZone")
    public Boolean useGeolocationForTimeZone;
    public CreateDatasetImportJobRequest withUseGeolocationForTimeZone(Boolean useGeolocationForTimeZone) {
        this.useGeolocationForTimeZone = useGeolocationForTimeZone;
        return this;
    }
}