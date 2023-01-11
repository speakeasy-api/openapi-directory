package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKubernetesNodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=replace")
    public Long replace;
    public DeleteKubernetesNodeQueryParams withReplace(Long replace) {
        this.replace = replace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip_drain")
    public Long skipDrain;
    public DeleteKubernetesNodeQueryParams withSkipDrain(Long skipDrain) {
        this.skipDrain = skipDrain;
        return this;
    }
}