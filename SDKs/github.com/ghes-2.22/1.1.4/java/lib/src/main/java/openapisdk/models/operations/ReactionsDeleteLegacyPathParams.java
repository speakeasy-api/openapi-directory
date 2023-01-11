package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsDeleteLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reaction_id")
    public Long reactionId;
    public ReactionsDeleteLegacyPathParams withReactionId(Long reactionId) {
        this.reactionId = reactionId;
        return this;
    }
}