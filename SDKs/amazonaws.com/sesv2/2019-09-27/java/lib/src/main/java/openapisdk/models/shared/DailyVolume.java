package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DailyVolume
 * An object that contains information about the volume of email sent on each day of the analysis period.
**/
public class DailyVolume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainIspPlacements")
    public DomainIspPlacement[] domainIspPlacements;
    public DailyVolume withDomainIspPlacements(DomainIspPlacement[] domainIspPlacements) {
        this.domainIspPlacements = domainIspPlacements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartDate")
    public OffsetDateTime startDate;
    public DailyVolume withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeStatistics")
    public VolumeStatistics volumeStatistics;
    public DailyVolume withVolumeStatistics(VolumeStatistics volumeStatistics) {
        this.volumeStatistics = volumeStatistics;
        return this;
    }
}