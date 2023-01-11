package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetTrigger
 * The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
**/
public class DatasetTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public TriggeringDataset dataset;
    public DatasetTrigger withDataset(TriggeringDataset dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public Schedule schedule;
    public DatasetTrigger withSchedule(Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
}