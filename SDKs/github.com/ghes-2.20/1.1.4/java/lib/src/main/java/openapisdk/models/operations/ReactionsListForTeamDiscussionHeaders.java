package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public ReactionsListForTeamDiscussionHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}