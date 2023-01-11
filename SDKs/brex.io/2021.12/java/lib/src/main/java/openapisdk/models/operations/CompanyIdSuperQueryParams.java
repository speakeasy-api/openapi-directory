package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdSuperQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public CompanyIdSuperLangEnum lang;
    public CompanyIdSuperQueryParams withLang(CompanyIdSuperLangEnum lang) {
        this.lang = lang;
        return this;
    }
}