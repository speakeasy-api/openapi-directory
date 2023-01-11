package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPackageServiceJsonRequestBodyPackage {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostPackageServiceJsonRequestBodyPackage withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=package")
    public String package_;
    public PostPackageServiceJsonRequestBodyPackage withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
}