package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigApacheSlingDavExServletQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alias")
    public String alias;
    public PostConfigApacheSlingDavExServletQueryParams withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alias@TypeHint")
    public String aliasAtTypeHint;
    public PostConfigApacheSlingDavExServletQueryParams withAliasAtTypeHint(String aliasAtTypeHint) {
        this.aliasAtTypeHint = aliasAtTypeHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dav.create-absolute-uri")
    public Boolean davCreateAbsoluteUri;
    public PostConfigApacheSlingDavExServletQueryParams withDavCreateAbsoluteUri(Boolean davCreateAbsoluteUri) {
        this.davCreateAbsoluteUri = davCreateAbsoluteUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dav.create-absolute-uri@TypeHint")
    public String davCreateAbsoluteUriAtTypeHint;
    public PostConfigApacheSlingDavExServletQueryParams withDavCreateAbsoluteUriAtTypeHint(String davCreateAbsoluteUriAtTypeHint) {
        this.davCreateAbsoluteUriAtTypeHint = davCreateAbsoluteUriAtTypeHint;
        return this;
    }
}