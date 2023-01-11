package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPackageServiceJsonRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostPackageServiceJsonRequestBodyPackage package_;
    public PostPackageServiceJsonRequestBody withPackage(PostPackageServiceJsonRequestBodyPackage package_) {
        this.package_ = package_;
        return this;
    }
}