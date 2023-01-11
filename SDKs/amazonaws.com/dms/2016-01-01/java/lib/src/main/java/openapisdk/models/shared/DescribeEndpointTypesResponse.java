package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEndpointTypesResponse
 * <p/>
**/
public class DescribeEndpointTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeEndpointTypesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportedEndpointTypes")
    public SupportedEndpointType[] supportedEndpointTypes;
    public DescribeEndpointTypesResponse withSupportedEndpointTypes(SupportedEndpointType[] supportedEndpointTypes) {
        this.supportedEndpointTypes = supportedEndpointTypes;
        return this;
    }
}