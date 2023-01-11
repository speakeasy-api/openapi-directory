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
 * DateColumnStatisticsData
 * Defines column statistics supported for timestamp data columns.
**/
public class DateColumnStatisticsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("MaximumValue")
    public OffsetDateTime maximumValue;
    public DateColumnStatisticsData withMaximumValue(OffsetDateTime maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("MinimumValue")
    public OffsetDateTime minimumValue;
    public DateColumnStatisticsData withMinimumValue(OffsetDateTime minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    }
    @JsonProperty("NumberOfDistinctValues")
    public Long numberOfDistinctValues;
    public DateColumnStatisticsData withNumberOfDistinctValues(Long numberOfDistinctValues) {
        this.numberOfDistinctValues = numberOfDistinctValues;
        return this;
    }
    @JsonProperty("NumberOfNulls")
    public Long numberOfNulls;
    public DateColumnStatisticsData withNumberOfNulls(Long numberOfNulls) {
        this.numberOfNulls = numberOfNulls;
        return this;
    }
}