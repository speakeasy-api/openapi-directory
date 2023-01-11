package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Record
 * The unit of data in a delivery stream.
**/
public class Record {
    @JsonProperty("Data")
    public String data;
    public Record withData(String data) {
        this.data = data;
        return this;
    }
}