package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTerminologyRequest {
    @JsonProperty("Name")
    public String name;
    public GetTerminologyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("TerminologyDataFormat")
    public TerminologyDataFormatEnum terminologyDataFormat;
    public GetTerminologyRequest withTerminologyDataFormat(TerminologyDataFormatEnum terminologyDataFormat) {
        this.terminologyDataFormat = terminologyDataFormat;
        return this;
    }
}