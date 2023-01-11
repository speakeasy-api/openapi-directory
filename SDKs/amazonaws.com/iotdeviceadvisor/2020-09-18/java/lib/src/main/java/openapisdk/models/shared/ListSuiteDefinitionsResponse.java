package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSuiteDefinitionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSuiteDefinitionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionInformationList")
    public SuiteDefinitionInformation[] suiteDefinitionInformationList;
    public ListSuiteDefinitionsResponse withSuiteDefinitionInformationList(SuiteDefinitionInformation[] suiteDefinitionInformationList) {
        this.suiteDefinitionInformationList = suiteDefinitionInformationList;
        return this;
    }
}