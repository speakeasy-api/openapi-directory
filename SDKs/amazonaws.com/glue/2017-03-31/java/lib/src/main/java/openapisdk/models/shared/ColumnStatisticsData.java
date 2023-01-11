package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnStatisticsData
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
**/
public class ColumnStatisticsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BinaryColumnStatisticsData")
    public BinaryColumnStatisticsData binaryColumnStatisticsData;
    public ColumnStatisticsData withBinaryColumnStatisticsData(BinaryColumnStatisticsData binaryColumnStatisticsData) {
        this.binaryColumnStatisticsData = binaryColumnStatisticsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BooleanColumnStatisticsData")
    public BooleanColumnStatisticsData booleanColumnStatisticsData;
    public ColumnStatisticsData withBooleanColumnStatisticsData(BooleanColumnStatisticsData booleanColumnStatisticsData) {
        this.booleanColumnStatisticsData = booleanColumnStatisticsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateColumnStatisticsData")
    public DateColumnStatisticsData dateColumnStatisticsData;
    public ColumnStatisticsData withDateColumnStatisticsData(DateColumnStatisticsData dateColumnStatisticsData) {
        this.dateColumnStatisticsData = dateColumnStatisticsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DecimalColumnStatisticsData")
    public DecimalColumnStatisticsData decimalColumnStatisticsData;
    public ColumnStatisticsData withDecimalColumnStatisticsData(DecimalColumnStatisticsData decimalColumnStatisticsData) {
        this.decimalColumnStatisticsData = decimalColumnStatisticsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DoubleColumnStatisticsData")
    public DoubleColumnStatisticsData doubleColumnStatisticsData;
    public ColumnStatisticsData withDoubleColumnStatisticsData(DoubleColumnStatisticsData doubleColumnStatisticsData) {
        this.doubleColumnStatisticsData = doubleColumnStatisticsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongColumnStatisticsData")
    public LongColumnStatisticsData longColumnStatisticsData;
    public ColumnStatisticsData withLongColumnStatisticsData(LongColumnStatisticsData longColumnStatisticsData) {
        this.longColumnStatisticsData = longColumnStatisticsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StringColumnStatisticsData")
    public StringColumnStatisticsData stringColumnStatisticsData;
    public ColumnStatisticsData withStringColumnStatisticsData(StringColumnStatisticsData stringColumnStatisticsData) {
        this.stringColumnStatisticsData = stringColumnStatisticsData;
        return this;
    }
    @JsonProperty("Type")
    public ColumnStatisticsTypeEnum type;
    public ColumnStatisticsData withType(ColumnStatisticsTypeEnum type) {
        this.type = type;
        return this;
    }
}