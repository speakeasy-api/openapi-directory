package openapisdk.models.shared;



/**
 * SourceAttribute
 * Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
**/
public class SourceAttribute {
    public SourceData sourceDataCopy;
    public SourceAttribute withSourceDataCopy(SourceData sourceDataCopy) {
        this.sourceDataCopy = sourceDataCopy;
        return this;
    }
    public SourceDataFunctionEnum sourceDataFunction;
    public SourceAttribute withSourceDataFunction(SourceDataFunctionEnum sourceDataFunction) {
        this.sourceDataFunction = sourceDataFunction;
        return this;
    }
    public SourceDataMap sourceDataMap;
    public SourceAttribute withSourceDataMap(SourceDataMap sourceDataMap) {
        this.sourceDataMap = sourceDataMap;
        return this;
    }
    public SourceDataTrimTitle sourceDataTrimTitle;
    public SourceAttribute withSourceDataTrimTitle(SourceDataTrimTitle sourceDataTrimTitle) {
        this.sourceDataTrimTitle = sourceDataTrimTitle;
        return this;
    }
}