package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListDiscussionCommentsInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public TeamsListDiscussionCommentsInOrgPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsListDiscussionCommentsInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public TeamsListDiscussionCommentsInOrgPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}