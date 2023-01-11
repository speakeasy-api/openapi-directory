package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CsvExportStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area")
    public Long area;
    public CsvExportStatus withArea(Long area) {
        this.area = area;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public CsvExportStatus withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_id")
    public String jobId;
    public CsvExportStatus withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_status")
    public String jobStatus;
    public CsvExportStatus withJobStatus(String jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_url")
    public String jobUrl;
    public CsvExportStatus withJobUrl(String jobUrl) {
        this.jobUrl = jobUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nb_results")
    public Long nbResults;
    public CsvExportStatus withNbResults(Long nbResults) {
        this.nbResults = nbResults;
        return this;
    }
    @JsonProperty("query")
    public UrlsQuery query;
    public CsvExportStatus withQuery(UrlsQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public String results;
    public CsvExportStatus withResults(String results) {
        this.results = results;
        return this;
    }
}