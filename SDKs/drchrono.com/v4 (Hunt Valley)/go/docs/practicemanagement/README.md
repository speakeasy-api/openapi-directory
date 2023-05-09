# PracticeManagement

## Overview

Create and manage practice management resources

### Available Operations

* [InventoryCategoriesList](#inventorycategorieslist) - Retrieve or search inventory categories
* [InventoryCategoriesRead](#inventorycategoriesread) - Retrieve an existing inventory category
* [InventoryVaccinesCreate](#inventoryvaccinescreate) - Create vaccine inventory
* [InventoryVaccinesList](#inventoryvaccineslist) - Retrieve or search vaccine inventories
* [InventoryVaccinesRead](#inventoryvaccinesread) - Retrieve an existing vaccine inventory
* [MessagesCreate](#messagescreate) - Create messages in doctor's message center
* [MessagesDelete](#messagesdelete) - Delete an existing message in doctor's message center
* [MessagesList](#messageslist) - Retrieve or search messages in doctor's message center
* [MessagesPartialUpdate](#messagespartialupdate) - Update an existing message in doctor's message center
* [MessagesRead](#messagesread) - Retrieve an existing message in doctor's message center
* [MessagesUpdate](#messagesupdate) - Update an existing message in doctor's message center
* [OfficesAddExamRoom](#officesaddexamroom) - Add an exam room to the office
* [OfficesList](#officeslist) - Retrieve or search offices
* [OfficesPartialUpdate](#officespartialupdate) - Update an existing office
* [OfficesRead](#officesread) - Retrieve an existing office
* [OfficesUpdate](#officesupdate) - Update an existing office
* [TaskCategoriesCreate](#taskcategoriescreate) - Create a task category
* [TaskCategoriesList](#taskcategorieslist) - Retrieve or search task categories
* [TaskCategoriesPartialUpdate](#taskcategoriespartialupdate) - Update an existing task category
* [TaskCategoriesRead](#taskcategoriesread) - Retrieve an existing task category
* [TaskCategoriesUpdate](#taskcategoriesupdate) - Update an existing task category
* [TaskNotesCreate](#tasknotescreate) - Create a task note
* [TaskNotesList](#tasknoteslist) - Retrieve or search task notes
* [TaskNotesPartialUpdate](#tasknotespartialupdate) - Update an existing task note
* [TaskNotesRead](#tasknotesread) - Retrieve an existing task note
* [TaskNotesUpdate](#tasknotesupdate) - Update an existing task note
* [TaskStatusesCreate](#taskstatusescreate) - Create a task status
* [TaskStatusesList](#taskstatuseslist) - Retrieve or search task statuses
* [TaskStatusesPartialUpdate](#taskstatusespartialupdate) - Update an existing task status
* [TaskStatusesRead](#taskstatusesread) - Retrieve an existing task status
* [TaskStatusesUpdate](#taskstatusesupdate) - Update an existing task status
* [TaskTemplatesCreate](#tasktemplatescreate) - Create a task template
* [TaskTemplatesList](#tasktemplateslist) - Retrieve or search task templates
* [TaskTemplatesPartialUpdate](#tasktemplatespartialupdate) - Update an existing task template
* [TaskTemplatesRead](#tasktemplatesread) - Retrieve an existing task template
* [TaskTemplatesUpdate](#tasktemplatesupdate) - Update an existing task template
* [TasksCreate](#taskscreate) - Create a task
* [TasksList](#taskslist) - Retrieve or search tasks
* [TasksPartialUpdate](#taskspartialupdate) - Update an existing task
* [TasksRead](#tasksread) - Retrieve an existing task
* [TasksUpdate](#tasksupdate) - Update an existing task

## InventoryCategoriesList

Retrieve or search inventory categories

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
    res, err := s.PracticeManagement.InventoryCategoriesList(ctx, operations.InventoryCategoriesListRequest{
        Cursor: sdk.String("voluptatem"),
        Doctor: sdk.Int64(271216),
        PageSize: sdk.Int64(577622),
        Since: sdk.String("quasi"),
    }, operations.InventoryCategoriesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryCategoriesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InventoryCategoriesRead

Retrieve an existing inventory category

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
    res, err := s.PracticeManagement.InventoryCategoriesRead(ctx, operations.InventoryCategoriesReadRequest{
        Doctor: sdk.Int64(82915),
        ID: "60820788-8ec6-4618-bbfe-9659eb40ec16",
        Since: sdk.String("earum"),
    }, operations.InventoryCategoriesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryCategory != nil {
        // handle response
    }
}
```

## InventoryVaccinesCreate

Create vaccine inventory

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
    res, err := s.PracticeManagement.InventoryVaccinesCreate(ctx, operations.InventoryVaccinesCreateRequest{
        CvxCode: sdk.String("est"),
        Doctor: sdk.Int64(937687),
        Since: sdk.String("nihil"),
        Status: sdk.String("nostrum"),
    }, operations.InventoryVaccinesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryVaccine != nil {
        // handle response
    }
}
```

## InventoryVaccinesList

Retrieve or search vaccine inventories

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
    res, err := s.PracticeManagement.InventoryVaccinesList(ctx, operations.InventoryVaccinesListRequest{
        Cursor: sdk.String("rerum"),
        CvxCode: sdk.String("perferendis"),
        Doctor: sdk.Int64(724331),
        PageSize: sdk.Int64(353041),
        Since: sdk.String("ratione"),
        Status: sdk.String("eos"),
    }, operations.InventoryVaccinesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryVaccinesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InventoryVaccinesRead

Retrieve an existing vaccine inventory

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
    res, err := s.PracticeManagement.InventoryVaccinesRead(ctx, operations.InventoryVaccinesReadRequest{
        CvxCode: sdk.String("id"),
        Doctor: sdk.Int64(266067),
        ID: "da37cbaa-f445-42c4-842c-9b2ad32dafe8",
        Since: sdk.String("quasi"),
        Status: sdk.String("mollitia"),
    }, operations.InventoryVaccinesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryVaccine != nil {
        // handle response
    }
}
```

## MessagesCreate

Create messages in doctor's message center

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
    res, err := s.PracticeManagement.MessagesCreate(ctx, operations.MessagesCreateRequest{
        Doctor: sdk.Int64(530232),
        Owner: sdk.Int64(500692),
        Patient: sdk.Int64(958091),
        ReceivedSince: sdk.String("ut"),
        ResponsibleUser: sdk.Int64(277943),
        Type: sdk.String("labore"),
        UpdatedSince: sdk.String("ut"),
    }, operations.MessagesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorMessage != nil {
        // handle response
    }
}
```

## MessagesDelete

Delete an existing message in doctor's message center

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
    res, err := s.PracticeManagement.MessagesDelete(ctx, operations.MessagesDeleteRequest{
        Doctor: sdk.Int64(313420),
        ID: "73fecd47-353f-463c-8209-379aa69cd5fb",
        Owner: sdk.Int64(763862),
        Patient: sdk.Int64(959659),
        ReceivedSince: sdk.String("quam"),
        ResponsibleUser: sdk.Int64(579242),
        Type: sdk.String("repellendus"),
        UpdatedSince: sdk.String("culpa"),
    }, operations.MessagesDeleteSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MessagesList

Retrieve or search messages in doctor's message center

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
    res, err := s.PracticeManagement.MessagesList(ctx, operations.MessagesListRequest{
        Cursor: sdk.String("dicta"),
        Doctor: sdk.Int64(524801),
        Owner: sdk.Int64(683271),
        PageSize: sdk.Int64(485950),
        Patient: sdk.Int64(518338),
        ReceivedSince: sdk.String("magni"),
        ResponsibleUser: sdk.Int64(178066),
        Type: sdk.String("harum"),
        UpdatedSince: sdk.String("voluptatibus"),
    }, operations.MessagesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MessagesPartialUpdate

Update an existing message in doctor's message center

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
    res, err := s.PracticeManagement.MessagesPartialUpdate(ctx, operations.MessagesPartialUpdateRequest{
        Doctor: sdk.Int64(606172),
        ID: "5894e686-1adb-455f-9e5d-751c9fe8f750",
        Owner: sdk.Int64(170126),
        Patient: sdk.Int64(700204),
        ReceivedSince: sdk.String("voluptatibus"),
        ResponsibleUser: sdk.Int64(858478),
        Type: sdk.String("quod"),
        UpdatedSince: sdk.String("non"),
    }, operations.MessagesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MessagesRead

Retrieve an existing message in doctor's message center

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
    res, err := s.PracticeManagement.MessagesRead(ctx, operations.MessagesReadRequest{
        Doctor: sdk.Int64(293176),
        ID: "50841f17-6445-4637-9f3f-b27e21f86265",
        Owner: sdk.Int64(442853),
        Patient: sdk.Int64(743340),
        ReceivedSince: sdk.String("ipsum"),
        ResponsibleUser: sdk.Int64(424505),
        Type: sdk.String("delectus"),
        UpdatedSince: sdk.String("maxime"),
    }, operations.MessagesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorMessage != nil {
        // handle response
    }
}
```

## MessagesUpdate

Update an existing message in doctor's message center

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
    res, err := s.PracticeManagement.MessagesUpdate(ctx, operations.MessagesUpdateRequest{
        Doctor: sdk.Int64(424499),
        ID: "b9f587ce-525c-4676-81a8-312e5047b4c2",
        Owner: sdk.Int64(105831),
        Patient: sdk.Int64(783837),
        ReceivedSince: sdk.String("cumque"),
        ResponsibleUser: sdk.Int64(714933),
        Type: sdk.String("numquam"),
        UpdatedSince: sdk.String("fugit"),
    }, operations.MessagesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OfficesAddExamRoom

Add an exam room to the office

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
    res, err := s.PracticeManagement.OfficesAddExamRoom(ctx, operations.OfficesAddExamRoomRequest{
        Doctor: sdk.Int64(226556),
        ID: "abcdc91f-aabd-4d88-a71f-6c48252d7771",
    }, operations.OfficesAddExamRoomSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Office != nil {
        // handle response
    }
}
```

## OfficesList

Retrieve or search offices

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
    res, err := s.PracticeManagement.OfficesList(ctx, operations.OfficesListRequest{
        Cursor: sdk.String("eveniet"),
        Doctor: sdk.Int64(454904),
        PageSize: sdk.Int64(941091),
    }, operations.OfficesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfficesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OfficesPartialUpdate

Update an existing office

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
    res, err := s.PracticeManagement.OfficesPartialUpdate(ctx, operations.OfficesPartialUpdateRequest{
        Doctor: sdk.Int64(871969),
        ID: "074009ef-8d29-4de1-9d70-97b5da08c57f",
    }, operations.OfficesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OfficesRead

Retrieve an existing office

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
    res, err := s.PracticeManagement.OfficesRead(ctx, operations.OfficesReadRequest{
        Doctor: sdk.Int64(660799),
        ID: "6c78a216-e19b-4afe-8a61-91498140b64f",
    }, operations.OfficesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Office != nil {
        // handle response
    }
}
```

## OfficesUpdate

Update an existing office

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
    res, err := s.PracticeManagement.OfficesUpdate(ctx, operations.OfficesUpdateRequest{
        Doctor: sdk.Int64(964021),
        ID: "8ae170ef-03b5-4f37-a4aa-868555966732",
    }, operations.OfficesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskCategoriesCreate

Create a task category

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
    res, err := s.PracticeManagement.TaskCategoriesCreate(ctx, operations.TaskCategoriesCreateRequest{
        Since: sdk.String("animi"),
    }, operations.TaskCategoriesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskCategory != nil {
        // handle response
    }
}
```

## TaskCategoriesList

Retrieve or search task categories

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
    res, err := s.PracticeManagement.TaskCategoriesList(ctx, operations.TaskCategoriesListRequest{
        Cursor: sdk.String("dolorum"),
        PageSize: sdk.Int64(373840),
        Since: sdk.String("temporibus"),
    }, operations.TaskCategoriesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskCategoriesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TaskCategoriesPartialUpdate

Update an existing task category

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
    res, err := s.PracticeManagement.TaskCategoriesPartialUpdate(ctx, operations.TaskCategoriesPartialUpdateRequest{
        ID: "cb6682cb-70f8-4cfd-9fb6-e91b9a9f7484",
        Since: sdk.String("aliquid"),
    }, operations.TaskCategoriesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskCategoriesRead

Retrieve an existing task category

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
    res, err := s.PracticeManagement.TaskCategoriesRead(ctx, operations.TaskCategoriesReadRequest{
        ID: "e2c3309d-b053-46d9-a75c-a006f5392c11",
        Since: sdk.String("est"),
    }, operations.TaskCategoriesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskCategory != nil {
        // handle response
    }
}
```

## TaskCategoriesUpdate

Update an existing task category

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
    res, err := s.PracticeManagement.TaskCategoriesUpdate(ctx, operations.TaskCategoriesUpdateRequest{
        ID: "25a8bf92-f974-428a-99a9-f8bf82211253",
        Since: sdk.String("ullam"),
    }, operations.TaskCategoriesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskNotesCreate

Create a task note

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
    res, err := s.PracticeManagement.TaskNotesCreate(ctx, operations.TaskNotesCreateRequest{
        Since: sdk.String("provident"),
        Task: sdk.Int64(820725),
    }, operations.TaskNotesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskNote != nil {
        // handle response
    }
}
```

## TaskNotesList

Retrieve or search task notes

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
    res, err := s.PracticeManagement.TaskNotesList(ctx, operations.TaskNotesListRequest{
        Cursor: sdk.String("iste"),
        PageSize: sdk.Int64(503598),
        Since: sdk.String("consectetur"),
        Task: sdk.Int64(520824),
    }, operations.TaskNotesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskNotesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TaskNotesPartialUpdate

Update an existing task note

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
    res, err := s.PracticeManagement.TaskNotesPartialUpdate(ctx, operations.TaskNotesPartialUpdateRequest{
        ID: "7f7a79cd-72cd-4248-8da2-1729f2ac41ef",
        Since: sdk.String("exercitationem"),
        Task: sdk.Int64(468221),
    }, operations.TaskNotesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskNotesRead

Retrieve an existing task note

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
    res, err := s.PracticeManagement.TaskNotesRead(ctx, operations.TaskNotesReadRequest{
        ID: "25f1169a-c1e4-41d8-a23c-23e34f2dfa4a",
        Since: sdk.String("sunt"),
        Task: sdk.Int64(598066),
    }, operations.TaskNotesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskNote != nil {
        // handle response
    }
}
```

## TaskNotesUpdate

Update an existing task note

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
    res, err := s.PracticeManagement.TaskNotesUpdate(ctx, operations.TaskNotesUpdateRequest{
        ID: "7f6de922-151f-4e17-9209-9853e9f543d8",
        Since: sdk.String("nemo"),
        Task: sdk.Int64(291649),
    }, operations.TaskNotesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskStatusesCreate

Create a task status

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
    res, err := s.PracticeManagement.TaskStatusesCreate(ctx, operations.TaskStatusesCreateRequest{
        Since: sdk.String("numquam"),
    }, operations.TaskStatusesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskStatus != nil {
        // handle response
    }
}
```

## TaskStatusesList

Retrieve or search task statuses

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
    res, err := s.PracticeManagement.TaskStatusesList(ctx, operations.TaskStatusesListRequest{
        Cursor: sdk.String("dolor"),
        PageSize: sdk.Int64(596888),
        Since: sdk.String("accusamus"),
    }, operations.TaskStatusesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskStatusesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TaskStatusesPartialUpdate

Update an existing task status

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
    res, err := s.PracticeManagement.TaskStatusesPartialUpdate(ctx, operations.TaskStatusesPartialUpdateRequest{
        ID: "e2244604-43bc-4154-988c-2f56e85da783",
        Since: sdk.String("odit"),
    }, operations.TaskStatusesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskStatusesRead

Retrieve an existing task status

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
    res, err := s.PracticeManagement.TaskStatusesRead(ctx, operations.TaskStatusesReadRequest{
        ID: "eabd617c-3b0d-451a-84bf-01bad8706d46",
        Since: sdk.String("alias"),
    }, operations.TaskStatusesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskStatus != nil {
        // handle response
    }
}
```

## TaskStatusesUpdate

Update an existing task status

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
    res, err := s.PracticeManagement.TaskStatusesUpdate(ctx, operations.TaskStatusesUpdateRequest{
        ID: "82bfbdc4-1ff5-4d4e-aae4-fb5cb35d1763",
        Since: sdk.String("quos"),
    }, operations.TaskStatusesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskTemplatesCreate

Create a task template

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
    res, err := s.PracticeManagement.TaskTemplatesCreate(ctx, operations.TaskTemplatesCreateRequest{
        AssigneeGroup: sdk.Int64(966415),
        AssigneeUser: sdk.Int64(123016),
        Category: sdk.Int64(922593),
        Since: sdk.String("facere"),
        Status: sdk.Int64(716538),
    }, operations.TaskTemplatesCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskTemplate != nil {
        // handle response
    }
}
```

## TaskTemplatesList

Retrieve or search task templates

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
    res, err := s.PracticeManagement.TaskTemplatesList(ctx, operations.TaskTemplatesListRequest{
        AssigneeGroup: sdk.Int64(497363),
        AssigneeUser: sdk.Int64(540416),
        Category: sdk.Int64(234383),
        Cursor: sdk.String("nemo"),
        PageSize: sdk.Int64(592760),
        Since: sdk.String("accusamus"),
        Status: sdk.Int64(793260),
    }, operations.TaskTemplatesListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskTemplatesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TaskTemplatesPartialUpdate

Update an existing task template

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
    res, err := s.PracticeManagement.TaskTemplatesPartialUpdate(ctx, operations.TaskTemplatesPartialUpdateRequest{
        AssigneeGroup: sdk.Int64(773479),
        AssigneeUser: sdk.Int64(327624),
        Category: sdk.Int64(767235),
        ID: "b860f8cd-580b-4a73-810e-4fe4447297cd",
        Since: sdk.String("non"),
        Status: sdk.Int64(701506),
    }, operations.TaskTemplatesPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskTemplatesRead

Retrieve an existing task template

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
    res, err := s.PracticeManagement.TaskTemplatesRead(ctx, operations.TaskTemplatesReadRequest{
        AssigneeGroup: sdk.Int64(72677),
        AssigneeUser: sdk.Int64(846332),
        Category: sdk.Int64(859740),
        ID: "3bbce247-b768-44ef-b501-26d71cffbd0e",
        Since: sdk.String("rerum"),
        Status: sdk.Int64(475060),
    }, operations.TaskTemplatesReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskTemplate != nil {
        // handle response
    }
}
```

## TaskTemplatesUpdate

Update an existing task template

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
    res, err := s.PracticeManagement.TaskTemplatesUpdate(ctx, operations.TaskTemplatesUpdateRequest{
        AssigneeGroup: sdk.Int64(308620),
        AssigneeUser: sdk.Int64(719317),
        Category: sdk.Int64(501451),
        ID: "421953b4-4bd3-4c43-959d-33e5953c0011",
        Since: sdk.String("amet"),
        Status: sdk.Int64(578452),
    }, operations.TaskTemplatesUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TasksCreate

Create a task

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
    res, err := s.PracticeManagement.TasksCreate(ctx, operations.TasksCreateRequest{
        AssigneeGroup: sdk.Int64(552512),
        AssigneeUser: sdk.Int64(397112),
        Category: sdk.Int64(193048),
        DueAtDate: sdk.String("culpa"),
        DueAtRange: sdk.String("fuga"),
        DueAtSince: sdk.String("modi"),
        DueAtUnknown: sdk.String("et"),
        Since: sdk.String("eveniet"),
        Status: sdk.Int64(399732),
    }, operations.TasksCreateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## TasksList

Retrieve or search tasks

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
    res, err := s.PracticeManagement.TasksList(ctx, operations.TasksListRequest{
        AssigneeGroup: sdk.Int64(760942),
        AssigneeUser: sdk.Int64(236588),
        Category: sdk.Int64(67746),
        Cursor: sdk.String("maxime"),
        DueAtDate: sdk.String("porro"),
        DueAtRange: sdk.String("explicabo"),
        DueAtSince: sdk.String("reiciendis"),
        DueAtUnknown: sdk.String("dicta"),
        PageSize: sdk.Int64(942436),
        Since: sdk.String("porro"),
        Status: sdk.Int64(735484),
    }, operations.TasksListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TasksList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TasksPartialUpdate

Update an existing task

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
    res, err := s.PracticeManagement.TasksPartialUpdate(ctx, operations.TasksPartialUpdateRequest{
        AssigneeGroup: sdk.Int64(351786),
        AssigneeUser: sdk.Int64(123593),
        Category: sdk.Int64(787241),
        DueAtDate: sdk.String("sint"),
        DueAtRange: sdk.String("id"),
        DueAtSince: sdk.String("ut"),
        DueAtUnknown: sdk.String("et"),
        ID: "ffbe9cbd-795e-4e65-a076-cc7abf616ea5",
        Since: sdk.String("porro"),
        Status: sdk.Int64(474003),
    }, operations.TasksPartialUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TasksRead

Retrieve an existing task

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
    res, err := s.PracticeManagement.TasksRead(ctx, operations.TasksReadRequest{
        AssigneeGroup: sdk.Int64(81455),
        AssigneeUser: sdk.Int64(428482),
        Category: sdk.Int64(264090),
        DueAtDate: sdk.String("dicta"),
        DueAtRange: sdk.String("provident"),
        DueAtSince: sdk.String("non"),
        DueAtUnknown: sdk.String("dolore"),
        ID: "b90f2e09-d19d-42fc-af9e-2e105944b935",
        Since: sdk.String("illum"),
        Status: sdk.Int64(153666),
    }, operations.TasksReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## TasksUpdate

Update an existing task

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
    res, err := s.PracticeManagement.TasksUpdate(ctx, operations.TasksUpdateRequest{
        AssigneeGroup: sdk.Int64(240555),
        AssigneeUser: sdk.Int64(444494),
        Category: sdk.Int64(659418),
        DueAtDate: sdk.String("ducimus"),
        DueAtRange: sdk.String("dolores"),
        DueAtSince: sdk.String("asperiores"),
        DueAtUnknown: sdk.String("occaecati"),
        ID: "0849d6ae-d4ae-4cb7-937c-d9222c9ff574",
        Since: sdk.String("iste"),
        Status: sdk.Int64(81775),
    }, operations.TasksUpdateSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
