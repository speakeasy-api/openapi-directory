package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public PostContentHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public PostContentHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public PostContentHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public PostContentHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public PostContentHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public PostContentHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public PostContentHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public PostContentHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public PostContentHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-lex-active-contexts")
    public String xAmzLexActiveContexts;
    public PostContentHeaders withXAmzLexActiveContexts(String xAmzLexActiveContexts) {
        this.xAmzLexActiveContexts = xAmzLexActiveContexts;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-lex-request-attributes")
    public String xAmzLexRequestAttributes;
    public PostContentHeaders withXAmzLexRequestAttributes(String xAmzLexRequestAttributes) {
        this.xAmzLexRequestAttributes = xAmzLexRequestAttributes;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-lex-session-attributes")
    public String xAmzLexSessionAttributes;
    public PostContentHeaders withXAmzLexSessionAttributes(String xAmzLexSessionAttributes) {
        this.xAmzLexSessionAttributes = xAmzLexSessionAttributes;
        return this;
    }
}