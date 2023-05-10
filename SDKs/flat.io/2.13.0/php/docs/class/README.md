# class

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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivateClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateClassRequest();
    $request->class = 'corrupti';

    $requestSecurity = new ActivateClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->activateClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addClassUser

This method can be used by a teacher of the class to enroll another Flat user into the class.

Only users that are part of your Organization can be enrolled in a class of this same Organization.

When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddClassUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddClassUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddClassUserRequest();
    $request->class = 'provident';
    $request->user = 'distinctio';

    $requestSecurity = new AddClassUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->addClassUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archiveAssignment

Archive the assignment


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchiveAssignmentRequest();
    $request->assignment = 'quibusdam';
    $request->class = 'unde';

    $requestSecurity = new ArchiveAssignmentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->archiveAssignment($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archiveClass

Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchiveClassRequest();
    $request->class = 'nulla';

    $requestSecurity = new ArchiveClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->archiveClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyAssignment

Copy an assignment to a specified class.

If the original assignment has a due date in the past, this new assingment will be created without a due date.

If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CopyAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentCopy;
use \OpenAPI\OpenAPI\Models\Operations\CopyAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyAssignmentRequest();
    $request->assignmentCopy = new AssignmentCopy();
    $request->assignmentCopy->assignment = 'corrupti';
    $request->assignmentCopy->classroom = 'illum';
    $request->assignmentCopy->scheduledDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->assignment = 'deserunt';
    $request->class = 'suscipit';

    $requestSecurity = new CopyAssignmentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->copyAssignment($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssignment

Use this method as a teacher to create and post a new assignment to a class.

If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentCreation;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentCreationAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClassAttachmentCreation;
use \OpenAPI\OpenAPI\Models\Shared\MediaScoreSharingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClassAttachmentCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentCreationGoogleClassroom;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentCreationMicrosoftGraph;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentCreationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssignmentRequest();
    $request->assignmentCreation = new AssignmentCreation();
    $request->assignmentCreation->assignedStudents = [
        'magnam',
        'debitis',
    ];
    $request->assignmentCreation->assigneeMode = AssignmentCreationAssigneeModeEnum::EVERYONE;
    $request->assignmentCreation->attachments = [
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
    ];
    $request->assignmentCreation->cover = 'tempora';
    $request->assignmentCreation->coverFile = 'suscipit';
    $request->assignmentCreation->description = 'molestiae';
    $request->assignmentCreation->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-25T16:12:20.938Z');
    $request->assignmentCreation->googleClassroom = new AssignmentCreationGoogleClassroom();
    $request->assignmentCreation->googleClassroom->topicId = 'voluptatum';
    $request->assignmentCreation->maxPoints = 4799.77;
    $request->assignmentCreation->microsoftGraph = new AssignmentCreationMicrosoftGraph();
    $request->assignmentCreation->microsoftGraph->categories = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->assignmentCreation->nbPlaybackAuthorized = 710.36;
    $request->assignmentCreation->scheduledDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T04:44:49.578Z');
    $request->assignmentCreation->state = AssignmentCreationStateEnum::ACTIVE;
    $request->assignmentCreation->title = 'Mr.';
    $request->assignmentCreation->toolset = 'ipsam';
    $request->assignmentCreation->type = AssignmentTypeEnum::WORKSHEET;
    $request->class = 'sapiente';

    $requestSecurity = new CreateAssignmentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->createAssignment($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createClass

Classrooms on Flat allow you to create activities with assignments and post content to a specific group.

When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.

If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.

You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ClassCreation;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassCreation();
    $request->name = 'Fred Strosin';
    $request->section = 'molestiae';

    $requestSecurity = new CreateClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->createClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubmission

Use this method as a student to create, update and submit a submission related to an assignment.
Students can only set `attachments` and `submit`.
Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubmissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmissionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ClassAttachmentCreation;
use \OpenAPI\OpenAPI\Models\Shared\MediaScoreSharingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClassAttachmentCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmissionUpdateComments;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubmissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubmissionRequest();
    $request->assignmentSubmissionUpdate = new AssignmentSubmissionUpdate();
    $request->assignmentSubmissionUpdate->attachments = [
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
    ];
    $request->assignmentSubmissionUpdate->comments = new AssignmentSubmissionUpdateComments();
    $request->assignmentSubmissionUpdate->comments->total = 8009.11;
    $request->assignmentSubmissionUpdate->comments->unread = 4614.79;
    $request->assignmentSubmissionUpdate->draftGrade = 5204.78;
    $request->assignmentSubmissionUpdate->grade = 7805.29;
    $request->assignmentSubmissionUpdate->return = false;
    $request->assignmentSubmissionUpdate->submit = false;
    $request->assignment = 'dolorum';
    $request->class = 'dicta';

    $requestSecurity = new CreateSubmissionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->createSubmission($request, $requestSecurity);

    if ($response->assignmentSubmission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClassUser

This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.

Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClassUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClassUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClassUserRequest();
    $request->class = 'nam';
    $request->user = 'officia';

    $requestSecurity = new DeleteClassUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->deleteClassUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubmission

Use this method as a teacher to delete a submission and allow student to start over the assignment


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubmissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubmissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubmissionRequest();
    $request->assignment = 'occaecati';
    $request->class = 'fugit';
    $request->submission = 'deleniti';

    $requestSecurity = new DeleteSubmissionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->deleteSubmission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubmissionComment

Delete a feedback comment to a submission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubmissionCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubmissionCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubmissionCommentRequest();
    $request->assignment = 'hic';
    $request->class = 'optio';
    $request->comment = 'totam';
    $request->submission = 'beatae';

    $requestSecurity = new DeleteSubmissionCommentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->deleteSubmissionComment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editSubmission

Use this method as a teacher to update the different submission and give feedback.
Teachers can only set `return`, `draftGrade` and `grade`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EditSubmissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmissionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ClassAttachmentCreation;
use \OpenAPI\OpenAPI\Models\Shared\MediaScoreSharingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClassAttachmentCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmissionUpdateComments;
use \OpenAPI\OpenAPI\Models\Operations\EditSubmissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditSubmissionRequest();
    $request->assignmentSubmissionUpdate = new AssignmentSubmissionUpdate();
    $request->assignmentSubmissionUpdate->attachments = [
        new ClassAttachmentCreation(),
        new ClassAttachmentCreation(),
    ];
    $request->assignmentSubmissionUpdate->comments = new AssignmentSubmissionUpdateComments();
    $request->assignmentSubmissionUpdate->comments->total = 4736;
    $request->assignmentSubmissionUpdate->comments->unread = 2645.55;
    $request->assignmentSubmissionUpdate->draftGrade = 1863.32;
    $request->assignmentSubmissionUpdate->grade = 7742.34;
    $request->assignmentSubmissionUpdate->return = false;
    $request->assignmentSubmissionUpdate->submit = false;
    $request->assignment = 'cum';
    $request->class = 'esse';
    $request->submission = 'ipsum';

    $requestSecurity = new EditSubmissionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->editSubmission($request, $requestSecurity);

    if ($response->assignmentSubmission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enrollClass

Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.

Flat will automatically add the user to the corresponding class group based on this role in the organization.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnrollClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnrollClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnrollClassRequest();
    $request->enrollmentCode = 'excepturi';

    $requestSecurity = new EnrollClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->enrollClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSubmissionsReviewsAsCsv

Export list of submissions grades to a CSV file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSubmissionsReviewsAsCsvRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSubmissionsReviewsAsCsvSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSubmissionsReviewsAsCsvRequest();
    $request->assignment = 'aspernatur';
    $request->class = 'perferendis';

    $requestSecurity = new ExportSubmissionsReviewsAsCsvSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->exportSubmissionsReviewsAsCsv($request, $requestSecurity);

    if ($response->exportSubmissionsReviewsAsCsv200TextCsvBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSubmissionsReviewsAsExcel

Export list of submissions grades to an Excel file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSubmissionsReviewsAsExcelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSubmissionsReviewsAsExcelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSubmissionsReviewsAsExcelRequest();
    $request->assignment = 'ad';
    $request->class = 'natus';

    $requestSecurity = new ExportSubmissionsReviewsAsExcelSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->exportSubmissionsReviewsAsExcel($request, $requestSecurity);

    if ($response->exportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forkScore

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForkScoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreFork;
use \OpenAPI\OpenAPI\Models\Operations\ForkScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForkScoreRequest();
    $request->scoreFork = new ScoreFork();
    $request->scoreFork->collection = 'sed';
    $request->score = 'iste';
    $request->sharingKey = 'dolor';

    $requestSecurity = new ForkScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->forkScore($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClass

Get the details of a single class

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassRequest();
    $request->class = 'natus';

    $requestSecurity = new GetClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->getClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreSubmissions

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreSubmissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreSubmissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreSubmissionsRequest();
    $request->score = 'laboriosam';

    $requestSecurity = new GetScoreSubmissionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->getScoreSubmissions($request, $requestSecurity);

    if ($response->assignmentSubmissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubmission

Get a student submission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubmissionRequest();
    $request->assignment = 'hic';
    $request->class = 'saepe';
    $request->submission = 'fuga';

    $requestSecurity = new GetSubmissionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->getSubmission($request, $requestSecurity);

    if ($response->assignmentSubmission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubmissionComments

List the feedback comments of a submission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubmissionCommentsRequest();
    $request->assignment = 'in';
    $request->class = 'corporis';
    $request->submission = 'iste';

    $requestSecurity = new GetSubmissionCommentsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->getSubmissionComments($request, $requestSecurity);

    if ($response->assignmentSubmissionComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubmissionHistory

For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubmissionHistoryRequest();
    $request->assignment = 'iure';
    $request->class = 'saepe';
    $request->submission = 'quidem';

    $requestSecurity = new GetSubmissionHistorySecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->getSubmissionHistory($request, $requestSecurity);

    if ($response->assignmentSubmissionHistories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubmissions

List the students' submissions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubmissionsRequest();
    $request->assignment = 'architecto';
    $request->class = 'ipsa';

    $requestSecurity = new GetSubmissionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->getSubmissions($request, $requestSecurity);

    if ($response->assignmentSubmissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssignments

Assignments listing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAssignmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssignmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssignmentsRequest();
    $request->class = 'reiciendis';

    $requestSecurity = new ListAssignmentsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->listAssignments($request, $requestSecurity);

    if ($response->assignments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClassStudentSubmissions

Use this method as a teacher to list all the assignment submissions sent by a student of the class


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListClassStudentSubmissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClassStudentSubmissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClassStudentSubmissionsRequest();
    $request->class = 'est';
    $request->user = 'mollitia';

    $requestSecurity = new ListClassStudentSubmissionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->listClassStudentSubmissions($request, $requestSecurity);

    if ($response->assignmentSubmissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClasses

List the classes available for the current user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListClassesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClassesStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListClassesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClassesRequest();
    $request->state = ListClassesStateEnum::ARCHIVED;

    $requestSecurity = new ListClassesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->listClasses($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSubmissionComment

Add a feedback comment to a submission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSubmissionCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmissionCommentCreation;
use \OpenAPI\OpenAPI\Models\Operations\PostSubmissionCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSubmissionCommentRequest();
    $request->assignmentSubmissionCommentCreation = new AssignmentSubmissionCommentCreation();
    $request->assignmentSubmissionCommentCreation->comment = 'dolores';
    $request->assignment = 'dolorem';
    $request->class = 'corporis';
    $request->submission = 'explicabo';

    $requestSecurity = new PostSubmissionCommentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->postSubmissionComment($request, $requestSecurity);

    if ($response->assignmentSubmissionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unarchiveAssignment

Mark the assignment as `active`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveAssignmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnarchiveAssignmentRequest();
    $request->assignment = 'nobis';
    $request->class = 'enim';

    $requestSecurity = new UnarchiveAssignmentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->unarchiveAssignment($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unarchiveClass

Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnarchiveClassRequest();
    $request->class = 'omnis';

    $requestSecurity = new UnarchiveClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->unarchiveClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClass

Update the meta information of the class


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClassUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClassRequest();
    $request->classUpdate = new ClassUpdate();
    $request->classUpdate->name = 'Ms. Cathy Marks';
    $request->classUpdate->section = 'doloribus';
    $request->class = 'sapiente';

    $requestSecurity = new UpdateClassSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->updateClass($request, $requestSecurity);

    if ($response->classDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubmissionComment

Update a feedback comment to a submission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubmissionCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmissionCommentCreation;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubmissionCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubmissionCommentRequest();
    $request->assignmentSubmissionCommentCreation = new AssignmentSubmissionCommentCreation();
    $request->assignmentSubmissionCommentCreation->comment = 'architecto';
    $request->assignment = 'mollitia';
    $request->class = 'dolorem';
    $request->comment = 'culpa';
    $request->submission = 'consequuntur';

    $requestSecurity = new UpdateSubmissionCommentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->class->updateSubmissionComment($request, $requestSecurity);

    if ($response->assignmentSubmissionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
