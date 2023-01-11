package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionCommentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public ReactionsListForTeamDiscussionCommentHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}