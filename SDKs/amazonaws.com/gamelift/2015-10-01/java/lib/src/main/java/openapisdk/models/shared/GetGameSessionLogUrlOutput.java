package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGameSessionLogUrlOutput
 * Represents the returned data in response to a request operation.
**/
public class GetGameSessionLogUrlOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreSignedUrl")
    public String preSignedUrl;
    public GetGameSessionLogUrlOutput withPreSignedUrl(String preSignedUrl) {
        this.preSignedUrl = preSignedUrl;
        return this;
    }
}