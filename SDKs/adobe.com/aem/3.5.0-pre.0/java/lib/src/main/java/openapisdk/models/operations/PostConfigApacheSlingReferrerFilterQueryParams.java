package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigApacheSlingReferrerFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow.empty")
    public Boolean allowEmpty;
    public PostConfigApacheSlingReferrerFilterQueryParams withAllowEmpty(Boolean allowEmpty) {
        this.allowEmpty = allowEmpty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow.empty@TypeHint")
    public String allowEmptyAtTypeHint;
    public PostConfigApacheSlingReferrerFilterQueryParams withAllowEmptyAtTypeHint(String allowEmptyAtTypeHint) {
        this.allowEmptyAtTypeHint = allowEmptyAtTypeHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow.hosts")
    public String allowHosts;
    public PostConfigApacheSlingReferrerFilterQueryParams withAllowHosts(String allowHosts) {
        this.allowHosts = allowHosts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow.hosts.regexp")
    public String allowHostsRegexp;
    public PostConfigApacheSlingReferrerFilterQueryParams withAllowHostsRegexp(String allowHostsRegexp) {
        this.allowHostsRegexp = allowHostsRegexp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow.hosts.regexp@TypeHint")
    public String allowHostsRegexpAtTypeHint;
    public PostConfigApacheSlingReferrerFilterQueryParams withAllowHostsRegexpAtTypeHint(String allowHostsRegexpAtTypeHint) {
        this.allowHostsRegexpAtTypeHint = allowHostsRegexpAtTypeHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow.hosts@TypeHint")
    public String allowHostsAtTypeHint;
    public PostConfigApacheSlingReferrerFilterQueryParams withAllowHostsAtTypeHint(String allowHostsAtTypeHint) {
        this.allowHostsAtTypeHint = allowHostsAtTypeHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter.methods")
    public String filterMethods;
    public PostConfigApacheSlingReferrerFilterQueryParams withFilterMethods(String filterMethods) {
        this.filterMethods = filterMethods;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter.methods@TypeHint")
    public String filterMethodsAtTypeHint;
    public PostConfigApacheSlingReferrerFilterQueryParams withFilterMethodsAtTypeHint(String filterMethodsAtTypeHint) {
        this.filterMethodsAtTypeHint = filterMethodsAtTypeHint;
        return this;
    }
}