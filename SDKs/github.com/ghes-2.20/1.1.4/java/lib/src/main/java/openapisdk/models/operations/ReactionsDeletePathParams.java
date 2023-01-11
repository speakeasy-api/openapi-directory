package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reaction_id")
    public Long reactionId;
    public ReactionsDeletePathParams withReactionId(Long reactionId) {
        this.reactionId = reactionId;
        return this;
    }
}