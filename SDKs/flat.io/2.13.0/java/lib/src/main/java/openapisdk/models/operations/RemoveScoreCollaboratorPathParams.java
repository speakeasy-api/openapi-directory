package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveScoreCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collaborator")
    public String collaborator;
    public RemoveScoreCollaboratorPathParams withCollaborator(String collaborator) {
        this.collaborator = collaborator;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public RemoveScoreCollaboratorPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}