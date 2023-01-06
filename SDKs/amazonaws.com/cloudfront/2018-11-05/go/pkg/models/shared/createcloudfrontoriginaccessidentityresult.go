package shared

// CreateCloudFrontOriginAccessIdentityResultCloudFrontOriginAccessIdentity
// CloudFront origin access identity.
type CreateCloudFrontOriginAccessIdentityResultCloudFrontOriginAccessIdentity struct {
	CloudFrontOriginAccessIdentityConfig *CloudFrontOriginAccessIdentityConfig
	ID                                   string
	S3CanonicalUserID                    string
}

// CreateCloudFrontOriginAccessIdentityResult
// The returned result of the corresponding request.
type CreateCloudFrontOriginAccessIdentityResult struct {
	CloudFrontOriginAccessIdentity *CreateCloudFrontOriginAccessIdentityResultCloudFrontOriginAccessIdentity
}
