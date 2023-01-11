package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3AffiliatesSearchImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3AffiliatesSearchImagesQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=style")
    public openapisdk.models.shared.AffiliateSearchStyleEnum style;
    public GetV3AffiliatesSearchImagesQueryParams withStyle(openapisdk.models.shared.AffiliateSearchStyleEnum style) {
        this.style = style;
        return this;
    }
}