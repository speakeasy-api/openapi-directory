package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlotTypeValue
 * Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
**/
public class SlotTypeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleValue")
    public SampleValue sampleValue;
    public SlotTypeValue withSampleValue(SampleValue sampleValue) {
        this.sampleValue = sampleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synonyms")
    public SampleValue[] synonyms;
    public SlotTypeValue withSynonyms(SampleValue[] synonyms) {
        this.synonyms = synonyms;
        return this;
    }
}