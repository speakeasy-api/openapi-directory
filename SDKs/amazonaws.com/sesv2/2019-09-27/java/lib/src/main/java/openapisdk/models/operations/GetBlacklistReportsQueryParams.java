package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlacklistReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BlacklistItemNames")
    public String[] blacklistItemNames;
    public GetBlacklistReportsQueryParams withBlacklistItemNames(String[] blacklistItemNames) {
        this.blacklistItemNames = blacklistItemNames;
        return this;
    }
}