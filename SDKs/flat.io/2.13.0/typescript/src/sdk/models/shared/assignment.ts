import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaAttachment } from "./mediaattachment";
import { GoogleClassroomCoursework } from "./googleclassroomcoursework";
import { MicrosoftGraphAssignment } from "./microsoftgraphassignment";
import { AssignmentSubmission } from "./assignmentsubmission";
import { AssignmentTypeEnum } from "./assignmenttypeenum";



// AssignmentCanvas
/** 
 * A Canvas LMS assignment
**/
export class AssignmentCanvas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AssignmentLti
/** 
 * An LTI assignment
**/
export class AssignmentLti extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AssignmentMfc
/** 
 * A MusicFirst Classroom assignment
**/
export class AssignmentMfc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum AssignmentStateEnum {
    Draft = "draft",
    Active = "active",
    Archived = "archived"
}


// Assignment
/** 
 * Assignment details
**/
export class Assignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: MediaAttachment })
  attachments?: MediaAttachment[];

  @SpeakeasyMetadata({ data: "json, name=canvas" })
  canvas?: AssignmentCanvas;

  @SpeakeasyMetadata({ data: "json, name=classroom" })
  classroom?: string;

  @SpeakeasyMetadata({ data: "json, name=cover" })
  cover?: string;

  @SpeakeasyMetadata({ data: "json, name=coverFile" })
  coverFile?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=googleClassroom" })
  googleClassroom?: GoogleClassroomCoursework;

  @SpeakeasyMetadata({ data: "json, name=lti" })
  lti?: AssignmentLti;

  @SpeakeasyMetadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=mfc" })
  mfc?: AssignmentMfc;

  @SpeakeasyMetadata({ data: "json, name=microsoftGraph" })
  microsoftGraph?: MicrosoftGraphAssignment;

  @SpeakeasyMetadata({ data: "json, name=scheduledDate" })
  scheduledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AssignmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submissions", elemType: AssignmentSubmission })
  submissions?: AssignmentSubmission[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AssignmentTypeEnum;
}
