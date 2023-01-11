package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Record
 * Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp. 
**/
public class Record {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public Dimension[] dimensions;
    public Record withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeasureName")
    public String measureName;
    public Record withMeasureName(String measureName) {
        this.measureName = measureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeasureValue")
    public String measureValue;
    public Record withMeasureValue(String measureValue) {
        this.measureValue = measureValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeasureValueType")
    public MeasureValueTypeEnum measureValueType;
    public Record withMeasureValueType(MeasureValueTypeEnum measureValueType) {
        this.measureValueType = measureValueType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Time")
    public String time;
    public Record withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeUnit")
    public TimeUnitEnum timeUnit;
    public Record withTimeUnit(TimeUnitEnum timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public Record withVersion(Long version) {
        this.version = version;
        return this;
    }
}