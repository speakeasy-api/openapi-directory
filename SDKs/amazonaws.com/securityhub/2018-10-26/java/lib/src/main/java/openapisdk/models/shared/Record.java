package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Record
 * An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.
**/
public class Record {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JsonPath")
    public String jsonPath;
    public Record withJsonPath(String jsonPath) {
        this.jsonPath = jsonPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordIndex")
    public Long recordIndex;
    public Record withRecordIndex(Long recordIndex) {
        this.recordIndex = recordIndex;
        return this;
    }
}