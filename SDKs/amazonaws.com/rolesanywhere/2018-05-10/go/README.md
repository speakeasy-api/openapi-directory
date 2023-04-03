# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rolesanywhere/2018-05-10/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateProfileRequest{
        RequestBody: operations.CreateProfileRequestBody{
            DurationSeconds: 548814,
            Enabled: false,
            ManagedPolicyArns: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Name: "nulla",
            RequireInstanceProperties: false,
            RoleArns: []string{
                "illum",
                "vel",
                "error",
            },
            SessionPolicy: "deserunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.CreateProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateProfile` - <p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>
* `CreateTrustAnchor` - <p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>
* `DeleteCrl` - <p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>
* `DeleteProfile` - <p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>
* `DeleteTrustAnchor` - <p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>
* `DisableCrl` - <p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>
* `DisableProfile` - <p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>
* `DisableTrustAnchor` - <p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>
* `EnableCrl` - <p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>
* `EnableProfile` - <p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>
* `EnableTrustAnchor` - <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>
* `GetCrl` - <p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>
* `GetProfile` - <p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>
* `GetSubject` - <p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>
* `GetTrustAnchor` - <p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>
* `ImportCrl` - <p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>
* `ListCrls` - <p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>
* `ListProfiles` - <p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>
* `ListSubjects` - <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>
* `ListTagsForResource` - <p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>
* `ListTrustAnchors` - <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>
* `TagResource` - <p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>
* `UntagResource` - <p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>
* `UpdateCrl` - <p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>
* `UpdateProfile` - <p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>
* `UpdateTrustAnchor` - <p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
