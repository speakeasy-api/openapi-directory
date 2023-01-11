package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLexiconPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LexiconName")
    public String lexiconName;
    public PutLexiconPathParams withLexiconName(String lexiconName) {
        this.lexiconName = lexiconName;
        return this;
    }
}