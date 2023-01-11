package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesIdNextSiblingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rss")
    public Boolean rss;
    public GetEpisodesIdNextSiblingQueryParams withRss(Boolean rss) {
        this.rss = rss;
        return this;
    }
}