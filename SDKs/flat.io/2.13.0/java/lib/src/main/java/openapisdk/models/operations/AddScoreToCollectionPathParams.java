package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddScoreToCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public AddScoreToCollectionPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public AddScoreToCollectionPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}