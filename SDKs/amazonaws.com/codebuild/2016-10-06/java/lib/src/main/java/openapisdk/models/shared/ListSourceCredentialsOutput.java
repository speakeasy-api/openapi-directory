package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSourceCredentialsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCredentialsInfos")
    public SourceCredentialsInfo[] sourceCredentialsInfos;
    public ListSourceCredentialsOutput withSourceCredentialsInfos(SourceCredentialsInfo[] sourceCredentialsInfos) {
        this.sourceCredentialsInfos = sourceCredentialsInfos;
        return this;
    }
}