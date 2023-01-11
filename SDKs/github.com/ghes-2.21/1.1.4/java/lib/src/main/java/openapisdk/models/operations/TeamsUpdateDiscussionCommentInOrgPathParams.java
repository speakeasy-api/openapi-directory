package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionCommentInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_number")
    public Long commentNumber;
    public TeamsUpdateDiscussionCommentInOrgPathParams withCommentNumber(Long commentNumber) {
        this.commentNumber = commentNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public TeamsUpdateDiscussionCommentInOrgPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsUpdateDiscussionCommentInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public TeamsUpdateDiscussionCommentInOrgPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}