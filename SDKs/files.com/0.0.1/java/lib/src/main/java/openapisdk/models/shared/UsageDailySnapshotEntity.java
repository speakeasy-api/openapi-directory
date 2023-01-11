package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageDailySnapshotEntity
 * List Usage Daily Snapshots
**/
public class UsageDailySnapshotEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_storage")
    public Integer currentStorage;
    public UsageDailySnapshotEntity withCurrentStorage(Integer currentStorage) {
        this.currentStorage = currentStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public LocalDate date;
    public UsageDailySnapshotEntity withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UsageDailySnapshotEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_by_top_level_dir")
    public Object[] usageByTopLevelDir;
    public UsageDailySnapshotEntity withUsageByTopLevelDir(Object[] usageByTopLevelDir) {
        this.usageByTopLevelDir = usageByTopLevelDir;
        return this;
    }
}