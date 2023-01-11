package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigSflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collector")
    public String collector;
    public ConfigSflow withCollector(String collector) {
        this.collector = collector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectorport")
    public Integer collectorport;
    public ConfigSflow withCollectorport(Integer collectorport) {
        this.collectorport = collectorport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding_type")
    public String encodingType;
    public ConfigSflow withEncodingType(String encodingType) {
        this.encodingType = encodingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ConfigSflow withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flows_per_min")
    public Integer flowsPerMin;
    public ConfigSflow withFlowsPerMin(Integer flowsPerMin) {
        this.flowsPerMin = flowsPerMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_samples")
    public String includeSamples;
    public ConfigSflow withIncludeSamples(String includeSamples) {
        this.includeSamples = includeSamples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records_per_sample")
    public String recordsPerSample;
    public ConfigSflow withRecordsPerSample(String recordsPerSample) {
        this.recordsPerSample = recordsPerSample;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samples_per_datagram")
    public String samplesPerDatagram;
    public ConfigSflow withSamplesPerDatagram(String samplesPerDatagram) {
        this.samplesPerDatagram = samplesPerDatagram;
        return this;
    }
}