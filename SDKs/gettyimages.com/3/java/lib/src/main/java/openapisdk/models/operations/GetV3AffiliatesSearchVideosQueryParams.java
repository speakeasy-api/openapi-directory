package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3AffiliatesSearchVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3AffiliatesSearchVideosQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
}