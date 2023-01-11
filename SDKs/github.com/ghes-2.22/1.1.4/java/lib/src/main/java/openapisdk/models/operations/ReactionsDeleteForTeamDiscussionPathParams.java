package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsDeleteForTeamDiscussionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public ReactionsDeleteForTeamDiscussionPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ReactionsDeleteForTeamDiscussionPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reaction_id")
    public Long reactionId;
    public ReactionsDeleteForTeamDiscussionPathParams withReactionId(Long reactionId) {
        this.reactionId = reactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public ReactionsDeleteForTeamDiscussionPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}