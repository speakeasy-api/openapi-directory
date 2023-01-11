package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MarkdownRenderRawRequests {
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public String string;
    public MarkdownRenderRawRequests withString(String string) {
        this.string = string;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/x-markdown")
    public String string1;
    public MarkdownRenderRawRequests withString1(String string1) {
        this.string1 = string1;
        return this;
    }
}