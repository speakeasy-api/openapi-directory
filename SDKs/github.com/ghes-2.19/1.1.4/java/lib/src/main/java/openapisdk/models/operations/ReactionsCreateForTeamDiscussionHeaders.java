package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public ReactionsCreateForTeamDiscussionHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}