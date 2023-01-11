package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TableDataImportJobMetadata
 * The metadata associated with the table data import job that was submitted.
**/
public class TableDataImportJobMetadata {
    @JsonProperty("dataSource")
    public ImportDataSource dataSource;
    public TableDataImportJobMetadata withDataSource(ImportDataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("importOptions")
    public ImportOptions importOptions;
    public TableDataImportJobMetadata withImportOptions(ImportOptions importOptions) {
        this.importOptions = importOptions;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("submitTime")
    public OffsetDateTime submitTime;
    public TableDataImportJobMetadata withSubmitTime(OffsetDateTime submitTime) {
        this.submitTime = submitTime;
        return this;
    }
    @JsonProperty("submitter")
    public ImportJobSubmitter submitter;
    public TableDataImportJobMetadata withSubmitter(ImportJobSubmitter submitter) {
        this.submitter = submitter;
        return this;
    }
}