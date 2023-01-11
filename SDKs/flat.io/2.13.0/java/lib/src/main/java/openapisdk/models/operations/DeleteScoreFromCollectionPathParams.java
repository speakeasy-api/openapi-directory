package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScoreFromCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public DeleteScoreFromCollectionPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public DeleteScoreFromCollectionPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}