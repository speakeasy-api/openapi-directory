package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataRetrievalRule
 * Data retrieval policy rule.
**/
public class DataRetrievalRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesPerHour")
    public Long bytesPerHour;
    public DataRetrievalRule withBytesPerHour(Long bytesPerHour) {
        this.bytesPerHour = bytesPerHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Strategy")
    public String strategy;
    public DataRetrievalRule withStrategy(String strategy) {
        this.strategy = strategy;
        return this;
    }
}