package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetCategoriesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String[] acceptEncoding;
    public CatalogGetCategoriesHeaders withAcceptEncoding(String[] acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
}