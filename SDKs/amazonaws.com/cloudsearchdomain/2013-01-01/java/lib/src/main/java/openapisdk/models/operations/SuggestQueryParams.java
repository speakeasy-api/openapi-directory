package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuggestQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public SuggestFormatEnum format;
    public SuggestQueryParams withFormat(SuggestFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public SuggestPrettyEnum pretty;
    public SuggestQueryParams withPretty(SuggestPrettyEnum pretty) {
        this.pretty = pretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SuggestQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public SuggestQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=suggester")
    public String suggester;
    public SuggestQueryParams withSuggester(String suggester) {
        this.suggester = suggester;
        return this;
    }
}