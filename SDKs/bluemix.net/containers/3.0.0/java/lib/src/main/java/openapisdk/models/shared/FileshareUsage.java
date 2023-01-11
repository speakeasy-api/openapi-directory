package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileshareUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_space")
    public String availableSpace;
    public FileshareUsage withAvailableSpace(String availableSpace) {
        this.availableSpace = availableSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_space")
    public String totalSpace;
    public FileshareUsage withTotalSpace(String totalSpace) {
        this.totalSpace = totalSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_space")
    public String usedSpace;
    public FileshareUsage withUsedSpace(String usedSpace) {
        this.usedSpace = usedSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used_space_percentage")
    public String usedSpacePercentage;
    public FileshareUsage withUsedSpacePercentage(String usedSpacePercentage) {
        this.usedSpacePercentage = usedSpacePercentage;
        return this;
    }
}