package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeSchemasMessage
 * <p/>
**/
public class DescribeSchemasMessage {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DescribeSchemasMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeSchemasMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRecords")
    public Long maxRecords;
    public DescribeSchemasMessage withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
}