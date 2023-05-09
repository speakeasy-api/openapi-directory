# CodeReferences

## Overview

With this endpoint you can upload Feature Flag and Setting usage references that will be shown on the ConfigCat Dashboard.

<a href="https://configcat.com/docs/advanced/code-references/overview/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Code References.

### Available Operations

* [PostV1CodeReferences](#postv1codereferences)
* [PostV1CodeReferencesDeleteReports](#postv1codereferencesdeletereports)

## PostV1CodeReferences

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CodeReferences.PostV1CodeReferences(ctx, shared.CodeReferenceRequest{
        ActiveBranches: []string{
            "perspiciatis",
            "voluptatem",
            "porro",
        },
        Branch: "consequuntur",
        CommitHash: sdk.String("blanditiis"),
        CommitURL: sdk.String("error"),
        ConfigID: "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a",
        FlagReferences: []shared.FlagReference{
            shared.FlagReference{
                References: []shared.ReferenceLines{
                    shared.ReferenceLines{
                        File: "ipsa",
                        FileURL: sdk.String("ipsa"),
                        PostLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 487838,
                                LineText: sdk.String("quaerat"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 881005,
                                LineText: sdk.String("quidem"),
                            },
                        },
                        PreLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 377752,
                                LineText: sdk.String("natus"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 179603,
                                LineText: sdk.String("atque"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 24678,
                                LineText: sdk.String("fugiat"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 67249,
                                LineText: sdk.String("soluta"),
                            },
                        },
                        ReferenceLine: shared.ReferenceLine{
                            LineNumber: 679393,
                            LineText: sdk.String("iusto"),
                        },
                    },
                },
                SettingID: 453697,
            },
            shared.FlagReference{
                References: []shared.ReferenceLines{
                    shared.ReferenceLines{
                        File: "deleniti",
                        FileURL: sdk.String("omnis"),
                        PostLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 714697,
                                LineText: sdk.String("asperiores"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 469497,
                                LineText: sdk.String("ipsum"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 456015,
                                LineText: sdk.String("id"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 906418,
                                LineText: sdk.String("eius"),
                            },
                        },
                        PreLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 20651,
                                LineText: sdk.String("amet"),
                            },
                        },
                        ReferenceLine: shared.ReferenceLine{
                            LineNumber: 758379,
                            LineText: sdk.String("accusamus"),
                        },
                    },
                    shared.ReferenceLines{
                        File: "ad",
                        FileURL: sdk.String("saepe"),
                        PostLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 645785,
                                LineText: sdk.String("provident"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 324683,
                                LineText: sdk.String("repellendus"),
                            },
                        },
                        PreLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 628982,
                                LineText: sdk.String("alias"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 872651,
                                LineText: sdk.String("quaerat"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 273542,
                                LineText: sdk.String("vel"),
                            },
                        },
                        ReferenceLine: shared.ReferenceLine{
                            LineNumber: 798047,
                            LineText: sdk.String("officiis"),
                        },
                    },
                    shared.ReferenceLines{
                        File: "qui",
                        FileURL: sdk.String("dolorum"),
                        PostLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 456130,
                                LineText: sdk.String("harum"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 483409,
                                LineText: sdk.String("ipsum"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 788740,
                                LineText: sdk.String("tenetur"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 229442,
                                LineText: sdk.String("tempore"),
                            },
                        },
                        PreLines: []shared.ReferenceLine{
                            shared.ReferenceLine{
                                LineNumber: 253941,
                                LineText: sdk.String("enim"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 213312,
                                LineText: sdk.String("sapiente"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 518201,
                                LineText: sdk.String("nihil"),
                            },
                            shared.ReferenceLine{
                                LineNumber: 25662,
                                LineText: sdk.String("expedita"),
                            },
                        },
                        ReferenceLine: shared.ReferenceLine{
                            LineNumber: 207470,
                            LineText: sdk.String("sed"),
                        },
                    },
                },
                SettingID: 424685,
            },
        },
        Repository: "libero",
        Uploader: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV1CodeReferencesDeleteReports

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CodeReferences.PostV1CodeReferencesDeleteReports(ctx, shared.DeleteRepositoryReportsRequest{
        Branch: sdk.String("deserunt"),
        ConfigID: "73429cdb-1a84-422b-b679-d2322715bf0c",
        Repository: "soluta",
        SettingID: sdk.Int(748664),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
