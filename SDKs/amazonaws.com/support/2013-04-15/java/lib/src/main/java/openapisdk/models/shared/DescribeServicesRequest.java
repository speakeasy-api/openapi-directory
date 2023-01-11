package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DescribeServicesRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCodeList")
    public String[] serviceCodeList;
    public DescribeServicesRequest withServiceCodeList(String[] serviceCodeList) {
        this.serviceCodeList = serviceCodeList;
        return this;
    }
}