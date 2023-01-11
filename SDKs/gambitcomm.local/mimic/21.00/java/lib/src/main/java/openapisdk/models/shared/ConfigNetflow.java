package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigNetflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleflowsets")
    public Integer bundleflowsets;
    public ConfigNetflow withBundleflowsets(Integer bundleflowsets) {
        this.bundleflowsets = bundleflowsets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collector")
    public String collector;
    public ConfigNetflow withCollector(String collector) {
        this.collector = collector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectorport")
    public Integer collectorport;
    public ConfigNetflow withCollectorport(Integer collectorport) {
        this.collectorport = collectorport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ConfigNetflow withFilename(String filename) {
        this.filename = filename;
        return this;
    }
}