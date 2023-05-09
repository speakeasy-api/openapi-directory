# Class

## Overview

Flat for Education classes

### Available Operations

* [ActivateClass](#activateclass) - Activate the class
* [AddClassUser](#addclassuser) - Add a user to the class
* [ArchiveAssignment](#archiveassignment) - Archive the assignment
* [ArchiveClass](#archiveclass) - Archive the class
* [CopyAssignment](#copyassignment) - Copy an assignment
* [CreateAssignment](#createassignment) - Assignment creation
* [CreateClass](#createclass) - Create a new class
* [CreateSubmission](#createsubmission) - Create or edit a submission
* [DeleteClassUser](#deleteclassuser) - Remove a user from the class
* [DeleteSubmission](#deletesubmission) - Delete a submission
* [DeleteSubmissionComment](#deletesubmissioncomment) - Delete a feedback comment to a submission
* [EditSubmission](#editsubmission) - Edit a submission
* [EnrollClass](#enrollclass) - Join a class
* [ExportSubmissionsReviewsAsCsv](#exportsubmissionsreviewsascsv) - CSV Grades exports
* [ExportSubmissionsReviewsAsExcel](#exportsubmissionsreviewsasexcel) - Excel Grades exports
* [ForkScore](#forkscore) - Fork a score
* [GetClass](#getclass) - Get the details of a single class
* [GetScoreSubmissions](#getscoresubmissions) - List submissions related to the score
* [GetSubmission](#getsubmission) - Get a student submission
* [GetSubmissionComments](#getsubmissioncomments) - List the feedback comments of a submission
* [GetSubmissionHistory](#getsubmissionhistory) - Get the history of the submission
* [GetSubmissions](#getsubmissions) - List the students' submissions
* [ListAssignments](#listassignments) - Assignments listing
* [ListClassStudentSubmissions](#listclassstudentsubmissions) - List the submissions for a student
* [ListClasses](#listclasses) - List the classes available for the current user
* [PostSubmissionComment](#postsubmissioncomment) - Add a feedback comment to a submission
* [UnarchiveAssignment](#unarchiveassignment) - Unarchive the assignment.
* [UnarchiveClass](#unarchiveclass) - Unarchive the class
* [UpdateClass](#updateclass) - Update the class
* [UpdateSubmissionComment](#updatesubmissioncomment) - Update a feedback comment to a submission

## ActivateClass

Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.


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
    res, err := s.Class.ActivateClass(ctx, operations.ActivateClassRequest{
        Class: "corrupti",
    }, operations.ActivateClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## AddClassUser

This method can be used by a teacher of the class to enroll another Flat user into the class.

Only users that are part of your Organization can be enrolled in a class of this same Organization.

When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.


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
    res, err := s.Class.AddClassUser(ctx, operations.AddClassUserRequest{
        Class: "provident",
        User: "distinctio",
    }, operations.AddClassUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ArchiveAssignment

Archive the assignment


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
    res, err := s.Class.ArchiveAssignment(ctx, operations.ArchiveAssignmentRequest{
        Assignment: "quibusdam",
        Class: "unde",
    }, operations.ArchiveAssignmentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## ArchiveClass

Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


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
    res, err := s.Class.ArchiveClass(ctx, operations.ArchiveClassRequest{
        Class: "nulla",
    }, operations.ArchiveClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## CopyAssignment

Copy an assignment to a specified class.

If the original assignment has a due date in the past, this new assingment will be created without a due date.

If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.


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
    res, err := s.Class.CopyAssignment(ctx, operations.CopyAssignmentRequest{
        AssignmentCopy: shared.AssignmentCopy{
            Assignment: sdk.String("corrupti"),
            Classroom: sdk.String("illum"),
            ScheduledDate: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        },
        Assignment: "deserunt",
        Class: "suscipit",
    }, operations.CopyAssignmentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## CreateAssignment

Use this method as a teacher to create and post a new assignment to a class.

If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.


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
    res, err := s.Class.CreateAssignment(ctx, operations.CreateAssignmentRequest{
        AssignmentCreation: &shared.AssignmentCreation{
            AssignedStudents: []string{
                "magnam",
                "debitis",
            },
            AssigneeMode: shared.AssignmentCreationAssigneeModeEnumEveryone.ToPointer(),
            Attachments: []shared.ClassAttachmentCreation{
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("tempora"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("suscipit"),
                    SharingMode: shared.MediaScoreSharingModeEnumWrite.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumWorksheet.ToPointer(),
                    URL: sdk.String("placeat"),
                    Worksheet: sdk.String("voluptatum"),
                },
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("iusto"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("excepturi"),
                    SharingMode: shared.MediaScoreSharingModeEnumWrite.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumWorksheet.ToPointer(),
                    URL: sdk.String("temporibus"),
                    Worksheet: sdk.String("ab"),
                },
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("quis"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("veritatis"),
                    SharingMode: shared.MediaScoreSharingModeEnumCopy.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumFlat.ToPointer(),
                    URL: sdk.String("ipsam"),
                    Worksheet: sdk.String("repellendus"),
                },
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("sapiente"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("quo"),
                    SharingMode: shared.MediaScoreSharingModeEnumRead.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumWorksheet.ToPointer(),
                    URL: sdk.String("at"),
                    Worksheet: sdk.String("maiores"),
                },
            },
            Cover: sdk.String("molestiae"),
            CoverFile: sdk.String("quod"),
            Description: sdk.String("quod"),
            DueDate: types.MustTimeFromString("2022-06-25T00:37:01.696Z"),
            GoogleClassroom: &shared.AssignmentCreationGoogleClassroom{
                TopicID: sdk.String("porro"),
            },
            MaxPoints: sdk.Float64(6788.8),
            MicrosoftGraph: &shared.AssignmentCreationMicrosoftGraph{
                Categories: []string{
                    "nam",
                },
            },
            NbPlaybackAuthorized: sdk.Float64(6399.21),
            ScheduledDate: types.MustTimeFromString("2022-09-18T08:27:00.721Z"),
            State: shared.AssignmentCreationStateEnumActive.ToPointer(),
            Title: sdk.String("Dr."),
            Toolset: sdk.String("optio"),
            Type: shared.AssignmentTypeEnumSharedWriting.ToPointer(),
        },
        Class: "beatae",
    }, operations.CreateAssignmentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## CreateClass

Classrooms on Flat allow you to create activities with assignments and post content to a specific group.

When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.

If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.

You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Class.CreateClass(ctx, shared.ClassCreation{
        Name: "Tanya Gleason",
        Section: sdk.String("cum"),
    }, operations.CreateClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## CreateSubmission

Use this method as a student to create, update and submit a submission related to an assignment.
Students can only set `attachments` and `submit`.
Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.


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
    res, err := s.Class.CreateSubmission(ctx, operations.CreateSubmissionRequest{
        AssignmentSubmissionUpdate: shared.AssignmentSubmissionUpdate{
            Attachments: []shared.ClassAttachmentCreation{
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("ipsum"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("excepturi"),
                    SharingMode: shared.MediaScoreSharingModeEnumRead.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumFlat.ToPointer(),
                    URL: sdk.String("ad"),
                    Worksheet: sdk.String("natus"),
                },
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("sed"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("iste"),
                    SharingMode: shared.MediaScoreSharingModeEnumRead.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumGoogleDrive.ToPointer(),
                    URL: sdk.String("laboriosam"),
                    Worksheet: sdk.String("hic"),
                },
            },
            Comments: &shared.AssignmentSubmissionUpdateComments{
                Total: sdk.Float64(9025.99),
                Unread: sdk.Float64(6818.2),
            },
            DraftGrade: sdk.Float64(4499.5),
            Grade: sdk.Float64(3595.08),
            Return: sdk.Bool(false),
            Submit: sdk.Bool(false),
        },
        Assignment: "iste",
        Class: "iure",
    }, operations.CreateSubmissionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmission != nil {
        // handle response
    }
}
```

## DeleteClassUser

This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.

Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.


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
    res, err := s.Class.DeleteClassUser(ctx, operations.DeleteClassUserRequest{
        Class: "saepe",
        User: "quidem",
    }, operations.DeleteClassUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubmission

Use this method as a teacher to delete a submission and allow student to start over the assignment


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
    res, err := s.Class.DeleteSubmission(ctx, operations.DeleteSubmissionRequest{
        Assignment: "architecto",
        Class: "ipsa",
        Submission: "reiciendis",
    }, operations.DeleteSubmissionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubmissionComment

Delete a feedback comment to a submission

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
    res, err := s.Class.DeleteSubmissionComment(ctx, operations.DeleteSubmissionCommentRequest{
        Assignment: "est",
        Class: "mollitia",
        Comment: "laborum",
        Submission: "dolores",
    }, operations.DeleteSubmissionCommentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EditSubmission

Use this method as a teacher to update the different submission and give feedback.
Teachers can only set `return`, `draftGrade` and `grade`


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
    res, err := s.Class.EditSubmission(ctx, operations.EditSubmissionRequest{
        AssignmentSubmissionUpdate: shared.AssignmentSubmissionUpdate{
            Attachments: []shared.ClassAttachmentCreation{
                shared.ClassAttachmentCreation{
                    GoogleDriveFileID: sdk.String("corporis"),
                    LockScoreTemplate: sdk.Bool(false),
                    Score: sdk.String("explicabo"),
                    SharingMode: shared.MediaScoreSharingModeEnumPerformance.ToPointer(),
                    Type: shared.ClassAttachmentCreationTypeEnumLink.ToPointer(),
                    URL: sdk.String("omnis"),
                    Worksheet: sdk.String("nemo"),
                },
            },
            Comments: &shared.AssignmentSubmissionUpdateComments{
                Total: sdk.Float64(3250.47),
                Unread: sdk.Float64(5701.97),
            },
            DraftGrade: sdk.Float64(384.25),
            Grade: sdk.Float64(4386.01),
            Return: sdk.Bool(false),
            Submit: sdk.Bool(false),
        },
        Assignment: "culpa",
        Class: "doloribus",
        Submission: "sapiente",
    }, operations.EditSubmissionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmission != nil {
        // handle response
    }
}
```

## EnrollClass

Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.

Flat will automatically add the user to the corresponding class group based on this role in the organization.


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
    res, err := s.Class.EnrollClass(ctx, operations.EnrollClassRequest{
        EnrollmentCode: "architecto",
    }, operations.EnrollClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## ExportSubmissionsReviewsAsCsv

Export list of submissions grades to a CSV file

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
    res, err := s.Class.ExportSubmissionsReviewsAsCsv(ctx, operations.ExportSubmissionsReviewsAsCsvRequest{
        Assignment: "mollitia",
        Class: "dolorem",
    }, operations.ExportSubmissionsReviewsAsCsvSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSubmissionsReviewsAsCsv200TextCsvBinaryString != nil {
        // handle response
    }
}
```

## ExportSubmissionsReviewsAsExcel

Export list of submissions grades to an Excel file

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
    res, err := s.Class.ExportSubmissionsReviewsAsExcel(ctx, operations.ExportSubmissionsReviewsAsExcelRequest{
        Assignment: "culpa",
        Class: "consequuntur",
    }, operations.ExportSubmissionsReviewsAsExcelSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString != nil {
        // handle response
    }
}
```

## ForkScore

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


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
    res, err := s.Class.ForkScore(ctx, operations.ForkScoreRequest{
        ScoreFork: shared.ScoreFork{
            Collection: sdk.String("repellat"),
        },
        Score: "mollitia",
        SharingKey: sdk.String("occaecati"),
    }, operations.ForkScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## GetClass

Get the details of a single class

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
    res, err := s.Class.GetClass(ctx, operations.GetClassRequest{
        Class: "numquam",
    }, operations.GetClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## GetScoreSubmissions

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


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
    res, err := s.Class.GetScoreSubmissions(ctx, operations.GetScoreSubmissionsRequest{
        Score: "commodi",
    }, operations.GetScoreSubmissionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissions != nil {
        // handle response
    }
}
```

## GetSubmission

Get a student submission

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
    res, err := s.Class.GetSubmission(ctx, operations.GetSubmissionRequest{
        Assignment: "quam",
        Class: "molestiae",
        Submission: "velit",
    }, operations.GetSubmissionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmission != nil {
        // handle response
    }
}
```

## GetSubmissionComments

List the feedback comments of a submission

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
    res, err := s.Class.GetSubmissionComments(ctx, operations.GetSubmissionCommentsRequest{
        Assignment: "error",
        Class: "quia",
        Submission: "quis",
    }, operations.GetSubmissionCommentsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissionComments != nil {
        // handle response
    }
}
```

## GetSubmissionHistory

For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.


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
    res, err := s.Class.GetSubmissionHistory(ctx, operations.GetSubmissionHistoryRequest{
        Assignment: "vitae",
        Class: "laborum",
        Submission: "animi",
    }, operations.GetSubmissionHistorySecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissionHistories != nil {
        // handle response
    }
}
```

## GetSubmissions

List the students' submissions

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
    res, err := s.Class.GetSubmissions(ctx, operations.GetSubmissionsRequest{
        Assignment: "enim",
        Class: "odit",
    }, operations.GetSubmissionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissions != nil {
        // handle response
    }
}
```

## ListAssignments

Assignments listing

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
    res, err := s.Class.ListAssignments(ctx, operations.ListAssignmentsRequest{
        Class: "quo",
    }, operations.ListAssignmentsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignments != nil {
        // handle response
    }
}
```

## ListClassStudentSubmissions

Use this method as a teacher to list all the assignment submissions sent by a student of the class


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
    res, err := s.Class.ListClassStudentSubmissions(ctx, operations.ListClassStudentSubmissionsRequest{
        Class: "sequi",
        User: "tenetur",
    }, operations.ListClassStudentSubmissionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissions != nil {
        // handle response
    }
}
```

## ListClasses

List the classes available for the current user

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
    res, err := s.Class.ListClasses(ctx, operations.ListClassesRequest{
        State: operations.ListClassesStateEnumInactive.ToPointer(),
    }, operations.ListClassesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## PostSubmissionComment

Add a feedback comment to a submission

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
    res, err := s.Class.PostSubmissionComment(ctx, operations.PostSubmissionCommentRequest{
        AssignmentSubmissionCommentCreation: shared.AssignmentSubmissionCommentCreation{
            Comment: "id",
        },
        Assignment: "possimus",
        Class: "aut",
        Submission: "quasi",
    }, operations.PostSubmissionCommentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissionComment != nil {
        // handle response
    }
}
```

## UnarchiveAssignment

Mark the assignment as `active`.


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
    res, err := s.Class.UnarchiveAssignment(ctx, operations.UnarchiveAssignmentRequest{
        Assignment: "error",
        Class: "temporibus",
    }, operations.UnarchiveAssignmentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## UnarchiveClass

Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


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
    res, err := s.Class.UnarchiveClass(ctx, operations.UnarchiveClassRequest{
        Class: "laborum",
    }, operations.UnarchiveClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## UpdateClass

Update the meta information of the class


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
    res, err := s.Class.UpdateClass(ctx, operations.UpdateClassRequest{
        ClassUpdate: &shared.ClassUpdate{
            Name: sdk.String("Johanna Wolf"),
            Section: sdk.String("praesentium"),
        },
        Class: "voluptatibus",
    }, operations.UpdateClassSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassDetails != nil {
        // handle response
    }
}
```

## UpdateSubmissionComment

Update a feedback comment to a submission

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
    res, err := s.Class.UpdateSubmissionComment(ctx, operations.UpdateSubmissionCommentRequest{
        AssignmentSubmissionCommentCreation: shared.AssignmentSubmissionCommentCreation{
            Comment: "ipsa",
        },
        Assignment: "omnis",
        Class: "voluptate",
        Comment: "cum",
        Submission: "perferendis",
    }, operations.UpdateSubmissionCommentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissionComment != nil {
        // handle response
    }
}
```
