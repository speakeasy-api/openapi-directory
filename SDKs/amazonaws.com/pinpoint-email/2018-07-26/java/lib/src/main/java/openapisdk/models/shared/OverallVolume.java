package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OverallVolume
 * An object that contains information about email that was sent from the selected domain.
**/
public class OverallVolume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainIspPlacements")
    public DomainIspPlacement[] domainIspPlacements;
    public OverallVolume withDomainIspPlacements(DomainIspPlacement[] domainIspPlacements) {
        this.domainIspPlacements = domainIspPlacements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRatePercent")
    public Double readRatePercent;
    public OverallVolume withReadRatePercent(Double readRatePercent) {
        this.readRatePercent = readRatePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeStatistics")
    public VolumeStatistics volumeStatistics;
    public OverallVolume withVolumeStatistics(VolumeStatistics volumeStatistics) {
        this.volumeStatistics = volumeStatistics;
        return this;
    }
}