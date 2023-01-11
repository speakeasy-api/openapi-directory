package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLexiconPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LexiconName")
    public String lexiconName;
    public DeleteLexiconPathParams withLexiconName(String lexiconName) {
        this.lexiconName = lexiconName;
        return this;
    }
}