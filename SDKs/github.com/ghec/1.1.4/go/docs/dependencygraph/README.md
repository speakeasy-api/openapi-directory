# DependencyGraph

## Overview

Endpoints to access Dependency Graph features.

### Available Operations

* [DependencyGraphCreateRepositorySnapshot](#dependencygraphcreaterepositorysnapshot) - Create a snapshot of dependencies for a repository
* [DependencyGraphDiffRange](#dependencygraphdiffrange) - Get a diff of the dependencies between commits

## DependencyGraphCreateRepositorySnapshot

Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository>

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
    res, err := s.DependencyGraph.DependencyGraphCreateRepositorySnapshot(ctx, operations.DependencyGraphCreateRepositorySnapshotRequest{
        Owner: "ipsa",
        Repo: "laborum",
        Snapshot: shared.Snapshot{
            Detector: shared.SnapshotDetector{
                Name: "docker buildtime detector",
                URL: "http://example.com/docker-buildtimer-detector",
                Version: "1.0.0",
            },
            Job: shared.SnapshotJob{
                Correlator: "yourworkflowname_yourjobname",
                HTMLURL: sdk.String("http://example.com/build"),
                ID: "5622a2b0-63f6-4732-8c34-a1ab27e102a11",
            },
            Manifests: map[string]shared.Manifest{
                "nostrum": shared.Manifest{
                    File: &shared.ManifestFile{
                        SourceLocation: sdk.String("/src/build/package-lock.json"),
                    },
                    Metadata: map[string]interface{}{
                        "expedita": "aliquid",
                        "officia": "suscipit",
                        "aliquid": "perferendis",
                        "eum": "voluptas",
                    },
                    Name: "package-lock.json",
                    Resolved: map[string]shared.Dependency{
                        "id": shared.Dependency{
                            Dependencies: []string{
                                "error",
                            },
                            Metadata: map[string]interface{}{
                                "voluptates": "mollitia",
                                "laborum": "libero",
                                "ad": "deleniti",
                                "enim": "vitae",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "repellendus": shared.Dependency{
                            Dependencies: []string{
                                "quo",
                                "ex",
                            },
                            Metadata: map[string]interface{}{
                                "ad": "expedita",
                                "voluptatem": "molestias",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                        "cum": shared.Dependency{
                            Dependencies: []string{
                                "beatae",
                                "voluptatum",
                            },
                            Metadata: map[string]interface{}{
                                "veritatis": "rerum",
                                "est": "culpa",
                                "voluptatem": "sapiente",
                            },
                            PackageURL: sdk.String("pkg:/npm/%40actions/http-client@1.0.11"),
                            Relationship: shared.DependencyRelationshipEnumDirect.ToPointer(),
                            Scope: shared.DependencyScopeEnumRuntime.ToPointer(),
                        },
                    },
                },
            },
            Metadata: map[string]interface{}{
                "architecto": "fuga",
                "pariatur": "debitis",
                "voluptatem": "alias",
                "deleniti": "earum",
            },
            Ref: "refs/heads/main",
            Scanned: types.MustTimeFromString("2020-06-13T14:52:50-05:00"),
            Sha: "ddc951f4b1293222421f2c8df679786153acf689",
            Version: 404244,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependencyGraphCreateRepositorySnapshot201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependencyGraphDiffRange

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits>

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
    res, err := s.DependencyGraph.DependencyGraphDiffRange(ctx, operations.DependencyGraphDiffRangeRequest{
        Basehead: "sapiente",
        Name: sdk.String("Israel Hickle"),
        Owner: "ullam",
        Repo: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependencyGraphDiff != nil {
        // handle response
    }
}
```
