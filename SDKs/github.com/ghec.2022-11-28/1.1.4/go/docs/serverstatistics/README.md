# ServerStatistics

## Overview

Server statistics

### Available Operations

* [EnterpriseAdminGetServerStatistics](#enterpriseadmingetserverstatistics) - Get GitHub Enterprise Server statistics

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
    res, err := s.ServerStatistics.EnterpriseAdminGetServerStatistics(ctx, operations.EnterpriseAdminGetServerStatisticsRequest{
        DateEnd: sdk.String("amet"),
        DateStart: sdk.String("voluptate"),
        EnterpriseOrOrg: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerStatistics != nil {
        // handle response
    }
}
```
