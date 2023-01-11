package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetParallelDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuxiliaryDataLocation")
    public ParallelDataDataLocation auxiliaryDataLocation;
    public GetParallelDataResponse withAuxiliaryDataLocation(ParallelDataDataLocation auxiliaryDataLocation) {
        this.auxiliaryDataLocation = auxiliaryDataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLocation")
    public ParallelDataDataLocation dataLocation;
    public GetParallelDataResponse withDataLocation(ParallelDataDataLocation dataLocation) {
        this.dataLocation = dataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestUpdateAttemptAuxiliaryDataLocation")
    public ParallelDataDataLocation latestUpdateAttemptAuxiliaryDataLocation;
    public GetParallelDataResponse withLatestUpdateAttemptAuxiliaryDataLocation(ParallelDataDataLocation latestUpdateAttemptAuxiliaryDataLocation) {
        this.latestUpdateAttemptAuxiliaryDataLocation = latestUpdateAttemptAuxiliaryDataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelDataProperties")
    public ParallelDataProperties parallelDataProperties;
    public GetParallelDataResponse withParallelDataProperties(ParallelDataProperties parallelDataProperties) {
        this.parallelDataProperties = parallelDataProperties;
        return this;
    }
}