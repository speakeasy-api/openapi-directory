package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImportationReportResponseDiff {
    @JsonProperty("createdCount")
    public Long createdCount;
    public GetImportationReportResponseDiff withCreatedCount(Long createdCount) {
        this.createdCount = createdCount;
        return this;
    }
    @JsonProperty("deletedCount")
    public Long deletedCount;
    public GetImportationReportResponseDiff withDeletedCount(Long deletedCount) {
        this.deletedCount = deletedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unchangedCount")
    public Long unchangedCount;
    public GetImportationReportResponseDiff withUnchangedCount(Long unchangedCount) {
        this.unchangedCount = unchangedCount;
        return this;
    }
    @JsonProperty("updatedCount")
    public Long updatedCount;
    public GetImportationReportResponseDiff withUpdatedCount(Long updatedCount) {
        this.updatedCount = updatedCount;
        return this;
    }
}