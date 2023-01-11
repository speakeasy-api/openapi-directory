package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitignoreGetTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GitignoreGetTemplatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}