package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLexiconPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LexiconName")
    public String lexiconName;
    public GetLexiconPathParams withLexiconName(String lexiconName) {
        this.lexiconName = lexiconName;
        return this;
    }
}