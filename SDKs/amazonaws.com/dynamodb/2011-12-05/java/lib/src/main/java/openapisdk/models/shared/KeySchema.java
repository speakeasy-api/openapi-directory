package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeySchema
 * The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>.
**/
public class KeySchema {
    @JsonProperty("HashKeyElement")
    public KeySchemaElement hashKeyElement;
    public KeySchema withHashKeyElement(KeySchemaElement hashKeyElement) {
        this.hashKeyElement = hashKeyElement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RangeKeyElement")
    public KeySchemaElement rangeKeyElement;
    public KeySchema withRangeKeyElement(KeySchemaElement rangeKeyElement) {
        this.rangeKeyElement = rangeKeyElement;
        return this;
    }
}