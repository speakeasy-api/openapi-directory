package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=title")
    public String title;
    public NewsSearchReadPathParams withTitle(String title) {
        this.title = title;
        return this;
    }
}