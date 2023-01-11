package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRiddleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=answer")
    public String answer;
    public PostRiddleQueryParams withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public PostRiddleQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=question")
    public String question;
    public PostRiddleQueryParams withQuestion(String question) {
        this.question = question;
        return this;
    }
}