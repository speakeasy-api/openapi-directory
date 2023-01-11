package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionCommentInOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public openapisdk.models.shared.CommentNumberEnum content;
    public ReactionsListForTeamDiscussionCommentInOrgQueryParams withContent(openapisdk.models.shared.CommentNumberEnum content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReactionsListForTeamDiscussionCommentInOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReactionsListForTeamDiscussionCommentInOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}