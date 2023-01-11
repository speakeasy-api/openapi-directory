package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSamplingTargetsRequestBody {
    @JsonProperty("SamplingStatisticsDocuments")
    public openapisdk.models.shared.SamplingStatisticsDocument[] samplingStatisticsDocuments;
    public GetSamplingTargetsRequestBody withSamplingStatisticsDocuments(openapisdk.models.shared.SamplingStatisticsDocument[] samplingStatisticsDocuments) {
        this.samplingStatisticsDocuments = samplingStatisticsDocuments;
        return this;
    }
}