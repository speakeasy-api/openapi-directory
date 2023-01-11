package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collaborator")
    public String collaborator;
    public GetScoreCollaboratorPathParams withCollaborator(String collaborator) {
        this.collaborator = collaborator;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreCollaboratorPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}