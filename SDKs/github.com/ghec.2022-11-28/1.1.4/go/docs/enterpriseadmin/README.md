# EnterpriseAdmin

## Overview

Enterprise Administration

### Available Operations

* [AnnouncementBannersGetAnnouncementBannerForEnterprise](#announcementbannersgetannouncementbannerforenterprise) - Get announcement banner for enterprise
* [AnnouncementBannersRemoveAnnouncementBannerForEnterprise](#announcementbannersremoveannouncementbannerforenterprise) - Remove announcement banner from enterprise
* [AnnouncementBannersSetAnnouncementBannerForEnterprise](#announcementbannerssetannouncementbannerforenterprise) - Set announcement banner for enterprise
* [EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise](#enterpriseadminaddcustomlabelstoselfhostedrunnerforenterprise) - Add custom labels to a self-hosted runner for an enterprise
* [EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminaddorgaccesstoselfhostedrunnergroupinenterprise) - Add organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise](#enterpriseadminaddselfhostedrunnertogroupforenterprise) - Add a self-hosted runner to a group for an enterprise
* [EnterpriseAdminCreateRegistrationTokenForEnterprise](#enterpriseadmincreateregistrationtokenforenterprise) - Create a registration token for an enterprise
* [EnterpriseAdminCreateRemoveTokenForEnterprise](#enterpriseadmincreateremovetokenforenterprise) - Create a remove token for an enterprise
* [EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise](#enterpriseadmincreateselfhostedrunnergroupforenterprise) - Create a self-hosted runner group for an enterprise
* [EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise](#enterpriseadmindeleteselfhostedrunnerfromenterprise) - Delete a self-hosted runner from an enterprise
* [EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise](#enterpriseadmindeleteselfhostedrunnergroupfromenterprise) - Delete a self-hosted runner group from an enterprise
* [EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise](#enterpriseadmindisableselectedorganizationgithubactionsenterprise) - Disable a selected organization for GitHub Actions in an enterprise
* [EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise](#enterpriseadminenableselectedorganizationgithubactionsenterprise) - Enable a selected organization for GitHub Actions in an enterprise
* [EnterpriseAdminGetAllowedActionsEnterprise](#enterpriseadmingetallowedactionsenterprise) - Get allowed actions and reusable workflows for an enterprise
* [EnterpriseAdminGetAuditLog](#enterpriseadmingetauditlog) - Get the audit log for an enterprise
* [EnterpriseAdminGetConsumedLicenses](#enterpriseadmingetconsumedlicenses) - List enterprise consumed licenses
* [EnterpriseAdminGetGithubActionsPermissionsEnterprise](#enterpriseadmingetgithubactionspermissionsenterprise) - Get GitHub Actions permissions for an enterprise
* [EnterpriseAdminGetLicenseSyncStatus](#enterpriseadmingetlicensesyncstatus) - Get a license sync status
* [EnterpriseAdminGetSelfHostedRunnerForEnterprise](#enterpriseadmingetselfhostedrunnerforenterprise) - Get a self-hosted runner for an enterprise
* [EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise](#enterpriseadmingetselfhostedrunnergroupforenterprise) - Get a self-hosted runner group for an enterprise
* [EnterpriseAdminGetServerStatistics](#enterpriseadmingetserverstatistics) - Get GitHub Enterprise Server statistics
* [EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise](#enterpriseadminlistlabelsforselfhostedrunnerforenterprise) - List labels for a self-hosted runner for an enterprise
* [EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminlistorgaccesstoselfhostedrunnergroupinenterprise) - List organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminListRunnerApplicationsForEnterprise](#enterpriseadminlistrunnerapplicationsforenterprise) - List runner applications for an enterprise
* [EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise](#enterpriseadminlistselectedorganizationsenabledgithubactionsenterprise) - List selected organizations enabled for GitHub Actions in an enterprise
* [EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise](#enterpriseadminlistselfhostedrunnergroupsforenterprise) - List self-hosted runner groups for an enterprise
* [EnterpriseAdminListSelfHostedRunnersForEnterprise](#enterpriseadminlistselfhostedrunnersforenterprise) - List self-hosted runners for an enterprise
* [EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise](#enterpriseadminlistselfhostedrunnersingroupforenterprise) - List self-hosted runners in a group for an enterprise
* [EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise](#enterpriseadminremoveallcustomlabelsfromselfhostedrunnerforenterprise) - Remove all custom labels from a self-hosted runner for an enterprise
* [EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise](#enterpriseadminremovecustomlabelfromselfhostedrunnerforenterprise) - Remove a custom label from a self-hosted runner for an enterprise
* [EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminremoveorgaccesstoselfhostedrunnergroupinenterprise) - Remove organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise](#enterpriseadminremoveselfhostedrunnerfromgroupforenterprise) - Remove a self-hosted runner from a group for an enterprise
* [EnterpriseAdminSetAllowedActionsEnterprise](#enterpriseadminsetallowedactionsenterprise) - Set allowed actions and reusable workflows for an enterprise
* [EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise](#enterpriseadminsetcustomlabelsforselfhostedrunnerforenterprise) - Set custom labels for a self-hosted runner for an enterprise
* [EnterpriseAdminSetGithubActionsPermissionsEnterprise](#enterpriseadminsetgithubactionspermissionsenterprise) - Set GitHub Actions permissions for an enterprise
* [EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminsetorgaccesstoselfhostedrunnergroupinenterprise) - Set organization access for a self-hosted runner group in an enterprise
* [EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise](#enterpriseadminsetselectedorganizationsenabledgithubactionsenterprise) - Set selected organizations enabled for GitHub Actions in an enterprise
* [EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise](#enterpriseadminsetselfhostedrunnersingroupforenterprise) - Set self-hosted runners in a group for an enterprise
* [EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise](#enterpriseadminupdateselfhostedrunnergroupforenterprise) - Update a self-hosted runner group for an enterprise
* [SecretScanningGetSecurityAnalysisSettingsForEnterprise](#secretscanninggetsecurityanalysissettingsforenterprise) - Get code security and analysis features for an enterprise
* [SecretScanningPatchSecurityAnalysisSettingsForEnterprise](#secretscanningpatchsecurityanalysissettingsforenterprise) - Update code security and analysis features for an enterprise
* [SecretScanningPostSecurityProductEnablementForEnterprise](#secretscanningpostsecurityproductenablementforenterprise) - Enable or disable a security feature

## AnnouncementBannersGetAnnouncementBannerForEnterprise

Gets the announcement banner currently set for the enterprise.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/announcement-banners#get-announcement-banner-for-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.AnnouncementBannersGetAnnouncementBannerForEnterprise(ctx, operations.AnnouncementBannersGetAnnouncementBannerForEnterpriseRequest{
        Enterprise: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnnouncementBanner != nil {
        // handle response
    }
}
```

## AnnouncementBannersRemoveAnnouncementBannerForEnterprise

Removes the announcement banner currently set for the enterprise.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/enterprises#remove-announcement-banner-from-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.AnnouncementBannersRemoveAnnouncementBannerForEnterprise(ctx, operations.AnnouncementBannersRemoveAnnouncementBannerForEnterpriseRequest{
        Enterprise: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnnouncementBannersSetAnnouncementBannerForEnterprise

Sets the announcement banner to display for the enterprise.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/enterprises#set-announcement-banner-for-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.AnnouncementBannersSetAnnouncementBannerForEnterprise(ctx, operations.AnnouncementBannersSetAnnouncementBannerForEnterpriseRequest{
        Announcement: shared.Announcement{
            Announcement: "Very **important** announcement about _something_.",
            ExpiresAt: types.MustTimeFromString(""2021-01-01T00:00:00.000-07:00""),
        },
        Enterprise: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnnouncementBanner != nil {
        // handle response
    }
}
```

## EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise

Add custom labels to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody{
            Labels: []string{
                "nam",
                "ipsam",
                "culpa",
                "dolor",
            },
        },
        Enterprise: "aliquam",
        RunnerID: 80532,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise

Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        Enterprise: "deleniti",
        OrgID: 85311,
        RunnerGroupID: 274575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise

Adds a self-hosted runner to a runner group configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(ctx, operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest{
        Enterprise: "dolor",
        RunnerGroupID: 8689,
        RunnerID: 100014,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminCreateRegistrationTokenForEnterprise

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-a-registration-token-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateRegistrationTokenForEnterprise(ctx, operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest{
        Enterprise: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateRemoveTokenForEnterprise

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-a-remove-token-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateRemoveTokenForEnterprise(ctx, operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest{
        Enterprise: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise

Creates a new self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(ctx, operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody{
            AllowsPublicRepositories: sdk.Bool(false),
            Name: "Mrs. Rebecca Larkin",
            RestrictedToWorkflows: sdk.Bool(false),
            Runners: []int64{
                162120,
                55107,
            },
            SelectedOrganizationIds: []int64{
                911198,
                773456,
                884952,
            },
            SelectedWorkflows: []string{
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
            },
            Visibility: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumAll.ToPointer(),
        },
        Enterprise: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsEnterprise != nil {
        // handle response
    }
}
```

## EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise

Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#delete-self-hosted-runner-from-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise(ctx, operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest{
        Enterprise: "veniam",
        RunnerID: 199596,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise

Deletes a self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(ctx, operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest{
        Enterprise: "expedita",
        RunnerGroupID: 432984,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise

Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(ctx, operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest{
        Enterprise: "vel",
        OrgID: 528234,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise

Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(ctx, operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest{
        Enterprise: "magnam",
        OrgID: 349440,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminGetAllowedActionsEnterprise

Gets the selected actions and reusable workflows that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-allowed-actions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAllowedActionsEnterprise(ctx, operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest{
        Enterprise: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedActions != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAuditLog

Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `read:audit_log` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAuditLog(ctx, operations.EnterpriseAdminGetAuditLogRequest{
        After: sdk.String("porro"),
        Before: sdk.String("autem"),
        Enterprise: "nobis",
        Include: shared.AuditLogIncludeEnumGit.ToPointer(),
        Order: shared.AuditLogOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(160393),
        PerPage: sdk.Int64(28952),
        Phrase: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogEvents != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetConsumedLicenses

Lists the license consumption information for all users, including those from connected servers, associated with an enterprise.
To use this endpoint, you must be an enterprise admin, and you must use an access
token with the `read:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#list-enterprise-consumed-licenses>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetConsumedLicenses(ctx, operations.EnterpriseAdminGetConsumedLicensesRequest{
        Enterprise: "necessitatibus",
        Page: sdk.Int64(95619),
        PerPage: sdk.Int64(392569),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConsumedLicenses != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetGithubActionsPermissionsEnterprise

Gets the GitHub Actions permissions policy for organizations and allowed actions and reusable workflows in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-github-actions-permissions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetGithubActionsPermissionsEnterprise(ctx, operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest{
        Enterprise: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsEnterprisePermissions != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetLicenseSyncStatus

Gets information about the status of a license sync job for an enterprise.
To use this endpoint, you must be an enterprise admin, and you must use an access
token with the `read:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-a-license-sync-status>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetLicenseSyncStatus(ctx, operations.EnterpriseAdminGetLicenseSyncStatusRequest{
        Enterprise: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseSyncStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetSelfHostedRunnerForEnterprise

Gets a specific self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "est",
        RunnerID: 690785,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Runner != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise

Gets a specific self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise(ctx, operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest{
        Enterprise: "sequi",
        RunnerGroupID: 987349,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsEnterprise != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetServerStatistics

Returns aggregate usage metrics for your GitHub Enterprise Server 3.5+ instance for a specified time period up to 365 days.

To use this endpoint, your GitHub Enterprise Server instance must be connected to GitHub Enterprise Cloud using GitHub Connect. You must enable Server Statistics, and for the API request provide your enterprise account name or organization name connected to the GitHub Enterprise Server. For more information, see "[Enabling Server Statistics for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" in the GitHub Enterprise Server documentation.

You'll need to use a personal access token:
  - If you connected your GitHub Enterprise Server to an enterprise account and enabled Server Statistics, you'll need a personal access token with the `read:enterprise` permission.
  - If you connected your GitHub Enterprise Server to an organization account and enabled Server Statistics, you'll need a personal access token with the `read:org` permission.

For more information on creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-github-enterprise-server-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetServerStatistics(ctx, operations.EnterpriseAdminGetServerStatisticsRequest{
        DateEnd: sdk.String("repudiandae"),
        DateStart: sdk.String("optio"),
        EnterpriseOrOrg: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerStatistics != nil {
        // handle response
    }
}
```

## EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise

Lists all labels for a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "nemo",
        RunnerID: 455898,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise

Lists the organizations with access to a self-hosted runner group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        Enterprise: "blanditiis",
        Page: sdk.Int64(642352),
        PerPage: sdk.Int64(376389),
        RunnerGroupID: 254025,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListRunnerApplicationsForEnterprise

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-runner-applications-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListRunnerApplicationsForEnterprise(ctx, operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest{
        Enterprise: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerApplications != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise

Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(ctx, operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest{
        Enterprise: "quos",
        Page: sdk.Int64(260904),
        PerPage: sdk.Int64(131903),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise

Lists all self-hosted runner groups for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise(ctx, operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest{
        Enterprise: "ducimus",
        Page: sdk.Int64(200516),
        PerPage: sdk.Int64(681740),
        VisibleToOrganization: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelfHostedRunnersForEnterprise

Lists all self-hosted runners configured for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-self-hosted-runners-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelfHostedRunnersForEnterprise(ctx, operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest{
        Enterprise: "incidunt",
        Page: sdk.Int64(97493),
        PerPage: sdk.Int64(524380),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise

Lists the self-hosted runners that are in a specific enterprise group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise(ctx, operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest{
        Enterprise: "fugiat",
        Page: sdk.Int64(117380),
        PerPage: sdk.Int64(395544),
        RunnerGroupID: 159845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise

Remove all custom labels from a self-hosted runner configured in an
enterprise. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "consectetur",
        RunnerID: 46806,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise

Remove a custom label from a self-hosted runner configured
in an enterprise. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "cupiditate",
        Name: "Dominic Abernathy",
        RunnerID: 579011,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise

Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        Enterprise: "iste",
        OrgID: 170099,
        RunnerGroupID: 81369,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise

Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(ctx, operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest{
        Enterprise: "fuga",
        RunnerGroupID: 881897,
        RunnerID: 976802,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetAllowedActionsEnterprise

Sets the actions and reusable workflows that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-allowed-actions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetAllowedActionsEnterprise(ctx, operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest{
        Enterprise: "distinctio",
        SelectedActions: shared.SelectedActions{
            GithubOwnedAllowed: sdk.Bool(false),
            PatternsAllowed: []string{
                "delectus",
                "minima",
                "praesentium",
            },
            VerifiedAllowed: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody{
            Labels: []string{
                "magnam",
                "temporibus",
                "quos",
                "commodi",
            },
        },
        Enterprise: "itaque",
        RunnerID: 415608,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminSetGithubActionsPermissionsEnterprise

Sets the GitHub Actions permissions policy for organizations and allowed actions and reusable workflows in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-github-actions-permissions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetGithubActionsPermissionsEnterprise(ctx, operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody{
            AllowedActions: shared.AllowedActionsEnumLocalOnly.ToPointer(),
            EnabledOrganizations: shared.EnabledOrganizationsEnumSelected,
        },
        Enterprise: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise

Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody{
            SelectedOrganizationIds: []int64{
                877399,
                32901,
                371919,
            },
        },
        Enterprise: "vel",
        RunnerGroupID: 1383,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise

Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(ctx, operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody{
            SelectedOrganizationIds: []int64{
                247685,
            },
        },
        Enterprise: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise

Replaces the list of self-hosted runners that are part of an enterprise runner group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(ctx, operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody{
            Runners: []int64{
                575213,
                858778,
            },
        },
        Enterprise: "deserunt",
        RunnerGroupID: 458503,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise

Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(ctx, operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest{
        RequestBody: &operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody{
            AllowsPublicRepositories: sdk.Bool(false),
            Name: sdk.String("Melinda Orn"),
            RestrictedToWorkflows: sdk.Bool(false),
            SelectedWorkflows: []string{
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
            },
            Visibility: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumAll.ToPointer(),
        },
        Enterprise: "hic",
        RunnerGroupID: 900103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsEnterprise != nil {
        // handle response
    }
}
```

## SecretScanningGetSecurityAnalysisSettingsForEnterprise

Gets code security and analysis settings for the specified enterprise.
To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin#get-code-security-analysis-features-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.SecretScanningGetSecurityAnalysisSettingsForEnterprise(ctx, operations.SecretScanningGetSecurityAnalysisSettingsForEnterpriseRequest{
        Enterprise: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseSecurityAnalysisSettings != nil {
        // handle response
    }
}
```

## SecretScanningPatchSecurityAnalysisSettingsForEnterprise

Updates the settings for advanced security, Dependabot alerts, secret scanning, and push protection for new repositories in an enterprise.
To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin#update-code-security-and-analysis-features-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.SecretScanningPatchSecurityAnalysisSettingsForEnterprise(ctx, operations.SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequest{
        RequestBody: &operations.SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequestBody{
            AdvancedSecurityEnabledForNewRepositories: sdk.Bool(false),
            DependabotAlertsEnabledForNewRepositories: sdk.Bool(false),
            SecretScanningEnabledForNewRepositories: sdk.Bool(false),
            SecretScanningPushProtectionCustomLink: sdk.String("ex"),
            SecretScanningPushProtectionEnabledForNewRepositories: sdk.Bool(false),
        },
        Enterprise: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SecretScanningPostSecurityProductEnablementForEnterprise

Enables or disables the specified security feature for all repositories in an enterprise.

To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin#enable-or-disable-a-security-feature>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.SecretScanningPostSecurityProductEnablementForEnterprise(ctx, operations.SecretScanningPostSecurityProductEnablementForEnterpriseRequest{
        Enablement: shared.EnterpriseSecurityProductEnablementEnumDisableAll,
        Enterprise: "delectus",
        SecurityProduct: shared.EnterpriseSecurityProductEnumAdvancedSecurity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
