package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRiddleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=answer")
    public String answer;
    public PutRiddleQueryParams withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public PutRiddleQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=question")
    public String question;
    public PutRiddleQueryParams withQuestion(String question) {
        this.question = question;
        return this;
    }
}