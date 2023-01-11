package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public SearchQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expr")
    public String expr;
    public SearchQueryParams withExpr(String expr) {
        this.expr = expr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet")
    public String facet;
    public SearchQueryParams withFacet(String facet) {
        this.facet = facet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public SearchFormatEnum format;
    public SearchQueryParams withFormat(SearchFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fq")
    public String fq;
    public SearchQueryParams withFq(String fq) {
        this.fq = fq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highlight")
    public String highlight;
    public SearchQueryParams withHighlight(String highlight) {
        this.highlight = highlight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partial")
    public Boolean partial;
    public SearchQueryParams withPartial(Boolean partial) {
        this.partial = partial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public SearchPrettyEnum pretty;
    public SearchQueryParams withPretty(SearchPrettyEnum pretty) {
        this.pretty = pretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q.options")
    public String qOptions;
    public SearchQueryParams withQOptions(String qOptions) {
        this.qOptions = qOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q.parser")
    public SearchQParserEnum qParser;
    public SearchQueryParams withQParser(SearchQParserEnum qParser) {
        this.qParser = qParser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return")
    public String return_;
    public SearchQueryParams withReturn(String return_) {
        this.return_ = return_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public SearchQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public SearchQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public SearchQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stats")
    public String stats;
    public SearchQueryParams withStats(String stats) {
        this.stats = stats;
        return this;
    }
}