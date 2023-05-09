# class_

## Overview

Flat for Education classes

### Available Operations

* [activateClass](#activateclass) - Activate the class
* [addClassUser](#addclassuser) - Add a user to the class
* [archiveAssignment](#archiveassignment) - Archive the assignment
* [archiveClass](#archiveclass) - Archive the class
* [copyAssignment](#copyassignment) - Copy an assignment
* [createAssignment](#createassignment) - Assignment creation
* [createClass](#createclass) - Create a new class
* [createSubmission](#createsubmission) - Create or edit a submission
* [deleteClassUser](#deleteclassuser) - Remove a user from the class
* [deleteSubmission](#deletesubmission) - Delete a submission
* [deleteSubmissionComment](#deletesubmissioncomment) - Delete a feedback comment to a submission
* [editSubmission](#editsubmission) - Edit a submission
* [enrollClass](#enrollclass) - Join a class
* [exportSubmissionsReviewsAsCsv](#exportsubmissionsreviewsascsv) - CSV Grades exports
* [exportSubmissionsReviewsAsExcel](#exportsubmissionsreviewsasexcel) - Excel Grades exports
* [forkScore](#forkscore) - Fork a score
* [getClass](#getclass) - Get the details of a single class
* [getScoreSubmissions](#getscoresubmissions) - List submissions related to the score
* [getSubmission](#getsubmission) - Get a student submission
* [getSubmissionComments](#getsubmissioncomments) - List the feedback comments of a submission
* [getSubmissionHistory](#getsubmissionhistory) - Get the history of the submission
* [getSubmissions](#getsubmissions) - List the students' submissions
* [listAssignments](#listassignments) - Assignments listing
* [listClassStudentSubmissions](#listclassstudentsubmissions) - List the submissions for a student
* [listClasses](#listclasses) - List the classes available for the current user
* [postSubmissionComment](#postsubmissioncomment) - Add a feedback comment to a submission
* [unarchiveAssignment](#unarchiveassignment) - Unarchive the assignment.
* [unarchiveClass](#unarchiveclass) - Unarchive the class
* [updateClass](#updateclass) - Update the class
* [updateSubmissionComment](#updatesubmissioncomment) - Update a feedback comment to a submission

## activateClass

Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateClassRequest;
import org.openapis.openapi.models.operations.ActivateClassResponse;
import org.openapis.openapi.models.operations.ActivateClassSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivateClassRequest req = new ActivateClassRequest("distinctio");            

            ActivateClassResponse res = sdk.class_.activateClass(req, new ActivateClassSecurity("quibusdam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addClassUser

This method can be used by a teacher of the class to enroll another Flat user into the class.

Only users that are part of your Organization can be enrolled in a class of this same Organization.

When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddClassUserRequest;
import org.openapis.openapi.models.operations.AddClassUserResponse;
import org.openapis.openapi.models.operations.AddClassUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddClassUserRequest req = new AddClassUserRequest("unde", "nulla");            

            AddClassUserResponse res = sdk.class_.addClassUser(req, new AddClassUserSecurity("corrupti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archiveAssignment

Archive the assignment


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveAssignmentRequest;
import org.openapis.openapi.models.operations.ArchiveAssignmentResponse;
import org.openapis.openapi.models.operations.ArchiveAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArchiveAssignmentRequest req = new ArchiveAssignmentRequest("illum", "vel");            

            ArchiveAssignmentResponse res = sdk.class_.archiveAssignment(req, new ArchiveAssignmentSecurity("error") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archiveClass

Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveClassRequest;
import org.openapis.openapi.models.operations.ArchiveClassResponse;
import org.openapis.openapi.models.operations.ArchiveClassSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArchiveClassRequest req = new ArchiveClassRequest("deserunt");            

            ArchiveClassResponse res = sdk.class_.archiveClass(req, new ArchiveClassSecurity("suscipit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyAssignment

Copy an assignment to a specified class.

If the original assignment has a due date in the past, this new assingment will be created without a due date.

If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyAssignmentRequest;
import org.openapis.openapi.models.operations.CopyAssignmentResponse;
import org.openapis.openapi.models.operations.CopyAssignmentSecurity;
import org.openapis.openapi.models.shared.AssignmentCopy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CopyAssignmentRequest req = new CopyAssignmentRequest(                new AssignmentCopy() {{
                                assignment = "iure";
                                classroom = "magnam";
                                scheduledDate = OffsetDateTime.parse("2022-10-30T21:34:57.850Z");
                            }};, "delectus", "tempora");            

            CopyAssignmentResponse res = sdk.class_.copyAssignment(req, new CopyAssignmentSecurity("suscipit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssignment

Use this method as a teacher to create and post a new assignment to a class.

If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssignmentRequest;
import org.openapis.openapi.models.operations.CreateAssignmentResponse;
import org.openapis.openapi.models.operations.CreateAssignmentSecurity;
import org.openapis.openapi.models.shared.AssignmentCreation;
import org.openapis.openapi.models.shared.AssignmentCreationAssigneeModeEnum;
import org.openapis.openapi.models.shared.AssignmentCreationGoogleClassroom;
import org.openapis.openapi.models.shared.AssignmentCreationMicrosoftGraph;
import org.openapis.openapi.models.shared.AssignmentCreationStateEnum;
import org.openapis.openapi.models.shared.AssignmentTypeEnum;
import org.openapis.openapi.models.shared.ClassAttachmentCreation;
import org.openapis.openapi.models.shared.ClassAttachmentCreationTypeEnum;
import org.openapis.openapi.models.shared.MediaScoreSharingModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssignmentRequest req = new CreateAssignmentRequest("molestiae") {{
                assignmentCreation = new AssignmentCreation() {{
                    assignedStudents = new String[]{{
                        add("placeat"),
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                    }};
                    assigneeMode = AssignmentCreationAssigneeModeEnum.EVERYONE;
                    attachments = new org.openapis.openapi.models.shared.ClassAttachmentCreation[]{{
                        add(new ClassAttachmentCreation() {{
                            googleDriveFileId = "temporibus";
                            lockScoreTemplate = false;
                            score = "ab";
                            sharingMode = MediaScoreSharingModeEnum.WRITE;
                            type = ClassAttachmentCreationTypeEnum.FLAT;
                            url = "deserunt";
                            worksheet = "perferendis";
                        }}),
                        add(new ClassAttachmentCreation() {{
                            googleDriveFileId = "ipsam";
                            lockScoreTemplate = false;
                            score = "repellendus";
                            sharingMode = MediaScoreSharingModeEnum.PERFORMANCE;
                            type = ClassAttachmentCreationTypeEnum.WORKSHEET;
                            url = "odit";
                            worksheet = "at";
                        }}),
                        add(new ClassAttachmentCreation() {{
                            googleDriveFileId = "at";
                            lockScoreTemplate = false;
                            score = "maiores";
                            sharingMode = MediaScoreSharingModeEnum.WRITE;
                            type = ClassAttachmentCreationTypeEnum.WORKSHEET;
                            url = "quod";
                            worksheet = "esse";
                        }}),
                        add(new ClassAttachmentCreation() {{
                            googleDriveFileId = "totam";
                            lockScoreTemplate = false;
                            score = "porro";
                            sharingMode = MediaScoreSharingModeEnum.COPY;
                            type = ClassAttachmentCreationTypeEnum.FLAT;
                            url = "nam";
                            worksheet = "officia";
                        }}),
                    }};
                    cover = "occaecati";
                    coverFile = "fugit";
                    description = "deleniti";
                    dueDate = OffsetDateTime.parse("2020-09-22T07:34:53.140Z");
                    googleClassroom = new AssignmentCreationGoogleClassroom() {{
                        topicId = "totam";
                    }};;
                    maxPoints = 1059.07;
                    microsoftGraph = new AssignmentCreationMicrosoftGraph() {{
                        categories = new String[]{{
                            add("molestiae"),
                            add("modi"),
                        }};
                    }};;
                    nbPlaybackAuthorized = 1863.32;
                    scheduledDate = OffsetDateTime.parse("2020-10-16T01:47:24.760Z");
                    state = AssignmentCreationStateEnum.DRAFT;
                    title = "Mrs.";
                    toolset = "excepturi";
                    type = AssignmentTypeEnum.NONE;
                }};;
            }};            

            CreateAssignmentResponse res = sdk.class_.createAssignment(req, new CreateAssignmentSecurity("perferendis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createClass

Classrooms on Flat allow you to create activities with assignments and post content to a specific group.

When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.

If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.

You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClassResponse;
import org.openapis.openapi.models.operations.CreateClassSecurity;
import org.openapis.openapi.models.shared.ClassCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ClassCreation req = new ClassCreation("ad") {{
                section = "natus";
            }};            

            CreateClassResponse res = sdk.class_.createClass(req, new CreateClassSecurity("sed") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubmission

Use this method as a student to create, update and submit a submission related to an assignment.
Students can only set `attachments` and `submit`.
Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubmissionRequest;
import org.openapis.openapi.models.operations.CreateSubmissionResponse;
import org.openapis.openapi.models.operations.CreateSubmissionSecurity;
import org.openapis.openapi.models.shared.AssignmentSubmissionUpdate;
import org.openapis.openapi.models.shared.AssignmentSubmissionUpdateComments;
import org.openapis.openapi.models.shared.ClassAttachmentCreation;
import org.openapis.openapi.models.shared.ClassAttachmentCreationTypeEnum;
import org.openapis.openapi.models.shared.MediaScoreSharingModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubmissionRequest req = new CreateSubmissionRequest(                new AssignmentSubmissionUpdate() {{
                                attachments = new org.openapis.openapi.models.shared.ClassAttachmentCreation[]{{
                                    add(new ClassAttachmentCreation() {{
                                        googleDriveFileId = "dolor";
                                        lockScoreTemplate = false;
                                        score = "natus";
                                        sharingMode = MediaScoreSharingModeEnum.WRITE;
                                        type = ClassAttachmentCreationTypeEnum.WORKSHEET;
                                        url = "saepe";
                                        worksheet = "fuga";
                                    }}),
                                    add(new ClassAttachmentCreation() {{
                                        googleDriveFileId = "in";
                                        lockScoreTemplate = false;
                                        score = "corporis";
                                        sharingMode = MediaScoreSharingModeEnum.COPY;
                                        type = ClassAttachmentCreationTypeEnum.LINK;
                                        url = "saepe";
                                        worksheet = "quidem";
                                    }}),
                                    add(new ClassAttachmentCreation() {{
                                        googleDriveFileId = "architecto";
                                        lockScoreTemplate = false;
                                        score = "ipsa";
                                        sharingMode = MediaScoreSharingModeEnum.PERFORMANCE;
                                        type = ClassAttachmentCreationTypeEnum.GOOGLE_DRIVE;
                                        url = "mollitia";
                                        worksheet = "laborum";
                                    }}),
                                }};
                                comments = new AssignmentSubmissionUpdateComments() {{
                                    total = 1709.09;
                                    unread = 2103.82;
                                }};;
                                draftGrade = 3581.52;
                                grade = 1289.26;
                                return_ = false;
                                submit = false;
                            }};, "nobis", "enim");            

            CreateSubmissionResponse res = sdk.class_.createSubmission(req, new CreateSubmissionSecurity("omnis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClassUser

This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.

Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClassUserRequest;
import org.openapis.openapi.models.operations.DeleteClassUserResponse;
import org.openapis.openapi.models.operations.DeleteClassUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClassUserRequest req = new DeleteClassUserRequest("nemo", "minima");            

            DeleteClassUserResponse res = sdk.class_.deleteClassUser(req, new DeleteClassUserSecurity("excepturi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubmission

Use this method as a teacher to delete a submission and allow student to start over the assignment


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubmissionRequest;
import org.openapis.openapi.models.operations.DeleteSubmissionResponse;
import org.openapis.openapi.models.operations.DeleteSubmissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubmissionRequest req = new DeleteSubmissionRequest("accusantium", "iure", "culpa");            

            DeleteSubmissionResponse res = sdk.class_.deleteSubmission(req, new DeleteSubmissionSecurity("doloribus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubmissionComment

Delete a feedback comment to a submission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubmissionCommentRequest;
import org.openapis.openapi.models.operations.DeleteSubmissionCommentResponse;
import org.openapis.openapi.models.operations.DeleteSubmissionCommentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubmissionCommentRequest req = new DeleteSubmissionCommentRequest("sapiente", "architecto", "mollitia", "dolorem");            

            DeleteSubmissionCommentResponse res = sdk.class_.deleteSubmissionComment(req, new DeleteSubmissionCommentSecurity("culpa") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## editSubmission

Use this method as a teacher to update the different submission and give feedback.
Teachers can only set `return`, `draftGrade` and `grade`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditSubmissionRequest;
import org.openapis.openapi.models.operations.EditSubmissionResponse;
import org.openapis.openapi.models.operations.EditSubmissionSecurity;
import org.openapis.openapi.models.shared.AssignmentSubmissionUpdate;
import org.openapis.openapi.models.shared.AssignmentSubmissionUpdateComments;
import org.openapis.openapi.models.shared.ClassAttachmentCreation;
import org.openapis.openapi.models.shared.ClassAttachmentCreationTypeEnum;
import org.openapis.openapi.models.shared.MediaScoreSharingModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EditSubmissionRequest req = new EditSubmissionRequest(                new AssignmentSubmissionUpdate() {{
                                attachments = new org.openapis.openapi.models.shared.ClassAttachmentCreation[]{{
                                    add(new ClassAttachmentCreation() {{
                                        googleDriveFileId = "repellat";
                                        lockScoreTemplate = false;
                                        score = "mollitia";
                                        sharingMode = MediaScoreSharingModeEnum.COPY;
                                        type = ClassAttachmentCreationTypeEnum.LINK;
                                        url = "commodi";
                                        worksheet = "quam";
                                    }}),
                                }};
                                comments = new AssignmentSubmissionUpdateComments() {{
                                    total = 4746.97;
                                    unread = 2444.25;
                                }};;
                                draftGrade = 6235.1;
                                grade = 1589.69;
                                return_ = false;
                                submit = false;
                            }};, "quis", "vitae", "laborum");            

            EditSubmissionResponse res = sdk.class_.editSubmission(req, new EditSubmissionSecurity("animi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enrollClass

Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.

Flat will automatically add the user to the corresponding class group based on this role in the organization.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnrollClassRequest;
import org.openapis.openapi.models.operations.EnrollClassResponse;
import org.openapis.openapi.models.operations.EnrollClassSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnrollClassRequest req = new EnrollClassRequest("enim");            

            EnrollClassResponse res = sdk.class_.enrollClass(req, new EnrollClassSecurity("odit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSubmissionsReviewsAsCsv

Export list of submissions grades to a CSV file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSubmissionsReviewsAsCsvRequest;
import org.openapis.openapi.models.operations.ExportSubmissionsReviewsAsCsvResponse;
import org.openapis.openapi.models.operations.ExportSubmissionsReviewsAsCsvSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSubmissionsReviewsAsCsvRequest req = new ExportSubmissionsReviewsAsCsvRequest("quo", "sequi");            

            ExportSubmissionsReviewsAsCsvResponse res = sdk.class_.exportSubmissionsReviewsAsCsv(req, new ExportSubmissionsReviewsAsCsvSecurity("tenetur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.exportSubmissionsReviewsAsCsv200TextCsvBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSubmissionsReviewsAsExcel

Export list of submissions grades to an Excel file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSubmissionsReviewsAsExcelRequest;
import org.openapis.openapi.models.operations.ExportSubmissionsReviewsAsExcelResponse;
import org.openapis.openapi.models.operations.ExportSubmissionsReviewsAsExcelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSubmissionsReviewsAsExcelRequest req = new ExportSubmissionsReviewsAsExcelRequest("ipsam", "id");            

            ExportSubmissionsReviewsAsExcelResponse res = sdk.class_.exportSubmissionsReviewsAsExcel(req, new ExportSubmissionsReviewsAsExcelSecurity("possimus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.exportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forkScore

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForkScoreRequest;
import org.openapis.openapi.models.operations.ForkScoreResponse;
import org.openapis.openapi.models.operations.ForkScoreSecurity;
import org.openapis.openapi.models.shared.ScoreFork;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForkScoreRequest req = new ForkScoreRequest(                new ScoreFork() {{
                                collection = "aut";
                            }};, "quasi") {{
                sharingKey = "error";
            }};            

            ForkScoreResponse res = sdk.class_.forkScore(req, new ForkScoreSecurity("temporibus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClass

Get the details of a single class

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassRequest;
import org.openapis.openapi.models.operations.GetClassResponse;
import org.openapis.openapi.models.operations.GetClassSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassRequest req = new GetClassRequest("laborum");            

            GetClassResponse res = sdk.class_.getClass(req, new GetClassSecurity("quasi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreSubmissions

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreSubmissionsRequest;
import org.openapis.openapi.models.operations.GetScoreSubmissionsResponse;
import org.openapis.openapi.models.operations.GetScoreSubmissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreSubmissionsRequest req = new GetScoreSubmissionsRequest("reiciendis");            

            GetScoreSubmissionsResponse res = sdk.class_.getScoreSubmissions(req, new GetScoreSubmissionsSecurity("voluptatibus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubmission

Get a student submission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubmissionRequest;
import org.openapis.openapi.models.operations.GetSubmissionResponse;
import org.openapis.openapi.models.operations.GetSubmissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubmissionRequest req = new GetSubmissionRequest("vero", "nihil", "praesentium");            

            GetSubmissionResponse res = sdk.class_.getSubmission(req, new GetSubmissionSecurity("voluptatibus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubmissionComments

List the feedback comments of a submission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubmissionCommentsRequest;
import org.openapis.openapi.models.operations.GetSubmissionCommentsResponse;
import org.openapis.openapi.models.operations.GetSubmissionCommentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubmissionCommentsRequest req = new GetSubmissionCommentsRequest("ipsa", "omnis", "voluptate");            

            GetSubmissionCommentsResponse res = sdk.class_.getSubmissionComments(req, new GetSubmissionCommentsSecurity("cum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissionComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubmissionHistory

For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubmissionHistoryRequest;
import org.openapis.openapi.models.operations.GetSubmissionHistoryResponse;
import org.openapis.openapi.models.operations.GetSubmissionHistorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubmissionHistoryRequest req = new GetSubmissionHistoryRequest("perferendis", "doloremque", "reprehenderit");            

            GetSubmissionHistoryResponse res = sdk.class_.getSubmissionHistory(req, new GetSubmissionHistorySecurity("ut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissionHistories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubmissions

List the students' submissions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubmissionsRequest;
import org.openapis.openapi.models.operations.GetSubmissionsResponse;
import org.openapis.openapi.models.operations.GetSubmissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubmissionsRequest req = new GetSubmissionsRequest("maiores", "dicta");            

            GetSubmissionsResponse res = sdk.class_.getSubmissions(req, new GetSubmissionsSecurity("corporis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssignments

Assignments listing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssignmentsRequest;
import org.openapis.openapi.models.operations.ListAssignmentsResponse;
import org.openapis.openapi.models.operations.ListAssignmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAssignmentsRequest req = new ListAssignmentsRequest("dolore");            

            ListAssignmentsResponse res = sdk.class_.listAssignments(req, new ListAssignmentsSecurity("iusto") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClassStudentSubmissions

Use this method as a teacher to list all the assignment submissions sent by a student of the class


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClassStudentSubmissionsRequest;
import org.openapis.openapi.models.operations.ListClassStudentSubmissionsResponse;
import org.openapis.openapi.models.operations.ListClassStudentSubmissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListClassStudentSubmissionsRequest req = new ListClassStudentSubmissionsRequest("dicta", "harum");            

            ListClassStudentSubmissionsResponse res = sdk.class_.listClassStudentSubmissions(req, new ListClassStudentSubmissionsSecurity("enim") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClasses

List the classes available for the current user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClassesRequest;
import org.openapis.openapi.models.operations.ListClassesResponse;
import org.openapis.openapi.models.operations.ListClassesSecurity;
import org.openapis.openapi.models.operations.ListClassesStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListClassesRequest req = new ListClassesRequest() {{
                state = ListClassesStateEnum.ARCHIVED;
            }};            

            ListClassesResponse res = sdk.class_.listClasses(req, new ListClassesSecurity("commodi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSubmissionComment

Add a feedback comment to a submission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSubmissionCommentRequest;
import org.openapis.openapi.models.operations.PostSubmissionCommentResponse;
import org.openapis.openapi.models.operations.PostSubmissionCommentSecurity;
import org.openapis.openapi.models.shared.AssignmentSubmissionCommentCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSubmissionCommentRequest req = new PostSubmissionCommentRequest(                new AssignmentSubmissionCommentCreation("repudiandae");, "quae", "ipsum", "quidem");            

            PostSubmissionCommentResponse res = sdk.class_.postSubmissionComment(req, new PostSubmissionCommentSecurity("molestias") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unarchiveAssignment

Mark the assignment as `active`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnarchiveAssignmentRequest;
import org.openapis.openapi.models.operations.UnarchiveAssignmentResponse;
import org.openapis.openapi.models.operations.UnarchiveAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnarchiveAssignmentRequest req = new UnarchiveAssignmentRequest("excepturi", "pariatur");            

            UnarchiveAssignmentResponse res = sdk.class_.unarchiveAssignment(req, new UnarchiveAssignmentSecurity("modi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unarchiveClass

Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnarchiveClassRequest;
import org.openapis.openapi.models.operations.UnarchiveClassResponse;
import org.openapis.openapi.models.operations.UnarchiveClassSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnarchiveClassRequest req = new UnarchiveClassRequest("praesentium");            

            UnarchiveClassResponse res = sdk.class_.unarchiveClass(req, new UnarchiveClassSecurity("rem") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClass

Update the meta information of the class


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClassRequest;
import org.openapis.openapi.models.operations.UpdateClassResponse;
import org.openapis.openapi.models.operations.UpdateClassSecurity;
import org.openapis.openapi.models.shared.ClassUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateClassRequest req = new UpdateClassRequest("voluptates") {{
                classUpdate = new ClassUpdate() {{
                    name = "Dr. Casey Mayer";
                    section = "enim";
                }};;
            }};            

            UpdateClassResponse res = sdk.class_.updateClass(req, new UpdateClassSecurity("consequatur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.classDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubmissionComment

Update a feedback comment to a submission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubmissionCommentRequest;
import org.openapis.openapi.models.operations.UpdateSubmissionCommentResponse;
import org.openapis.openapi.models.operations.UpdateSubmissionCommentSecurity;
import org.openapis.openapi.models.shared.AssignmentSubmissionCommentCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSubmissionCommentRequest req = new UpdateSubmissionCommentRequest(                new AssignmentSubmissionCommentCreation("est");, "quibusdam", "explicabo", "deserunt", "distinctio");            

            UpdateSubmissionCommentResponse res = sdk.class_.updateSubmissionComment(req, new UpdateSubmissionCommentSecurity("quibusdam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
