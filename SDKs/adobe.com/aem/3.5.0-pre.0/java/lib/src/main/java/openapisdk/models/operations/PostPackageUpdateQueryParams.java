package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPackageUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=_charset_")
    public String charset;
    public PostPackageUpdateQueryParams withCharset(String charset) {
        this.charset = charset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostPackageUpdateQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupName")
    public String groupName;
    public PostPackageUpdateQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=packageName")
    public String packageName;
    public PostPackageUpdateQueryParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public PostPackageUpdateQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public PostPackageUpdateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}