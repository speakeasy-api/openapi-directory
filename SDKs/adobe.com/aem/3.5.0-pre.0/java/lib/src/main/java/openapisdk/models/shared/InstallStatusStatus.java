package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstallStatusStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finished")
    public Boolean finished;
    public InstallStatusStatus withFinished(Boolean finished) {
        this.finished = finished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemCount")
    public Long itemCount;
    public InstallStatusStatus withItemCount(Long itemCount) {
        this.itemCount = itemCount;
        return this;
    }
}