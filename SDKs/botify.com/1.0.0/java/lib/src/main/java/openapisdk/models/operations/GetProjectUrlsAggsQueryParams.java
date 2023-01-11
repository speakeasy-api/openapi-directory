package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUrlsAggsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area")
    public GetProjectUrlsAggsAreaEnum area;
    public GetProjectUrlsAggsQueryParams withArea(GetProjectUrlsAggsAreaEnum area) {
        this.area = area;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_analysis_slug")
    public String lastAnalysisSlug;
    public GetProjectUrlsAggsQueryParams withLastAnalysisSlug(String lastAnalysisSlug) {
        this.lastAnalysisSlug = lastAnalysisSlug;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nb_analyses")
    public Integer nbAnalyses;
    public GetProjectUrlsAggsQueryParams withNbAnalyses(Integer nbAnalyses) {
        this.nbAnalyses = nbAnalyses;
        return this;
    }
}