package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposCreatePagesSiteRequestBody
 * The source branch and directory used to publish your Pages site.
**/
public class ReposCreatePagesSiteRequestBody {
    @JsonProperty("source")
    public ReposCreatePagesSiteRequestBodySource source;
    public ReposCreatePagesSiteRequestBody withSource(ReposCreatePagesSiteRequestBodySource source) {
        this.source = source;
        return this;
    }
}