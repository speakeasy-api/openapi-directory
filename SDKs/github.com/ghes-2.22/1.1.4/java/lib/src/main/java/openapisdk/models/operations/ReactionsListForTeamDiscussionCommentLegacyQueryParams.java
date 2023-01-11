package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionCommentLegacyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public openapisdk.models.shared.CommentNumberEnum content;
    public ReactionsListForTeamDiscussionCommentLegacyQueryParams withContent(openapisdk.models.shared.CommentNumberEnum content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReactionsListForTeamDiscussionCommentLegacyQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReactionsListForTeamDiscussionCommentLegacyQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}