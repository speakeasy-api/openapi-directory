package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesIdPreviousSiblingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rss")
    public Boolean rss;
    public GetEpisodesIdPreviousSiblingQueryParams withRss(Boolean rss) {
        this.rss = rss;
        return this;
    }
}