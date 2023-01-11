package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionCommentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public ReactionsCreateForTeamDiscussionCommentHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}