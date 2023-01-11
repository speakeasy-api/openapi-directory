import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassAttachmentCreation } from "./classattachmentcreation";
import { AssignmentTypeEnum } from "./assignmenttypeenum";


export enum AssignmentCreationAssigneeModeEnum {
    Everyone = "everyone",
    Selected = "selected"
}


// AssignmentCreationGoogleClassroom
/** 
 * Google Classroom options for this assignment
**/
export class AssignmentCreationGoogleClassroom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicId" })
  topicId?: string;
}


// AssignmentCreationMicrosoftGraph
/** 
 * Microsoft Graph options for this assignment
**/
export class AssignmentCreationMicrosoftGraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];
}

export enum AssignmentCreationStateEnum {
    Draft = "draft",
    Active = "active"
}


// AssignmentCreation
/** 
 * Assignment creation details
**/
export class AssignmentCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedStudents" })
  assignedStudents?: string[];

  @SpeakeasyMetadata({ data: "json, name=assigneeMode" })
  assigneeMode?: AssignmentCreationAssigneeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: ClassAttachmentCreation })
  attachments?: ClassAttachmentCreation[];

  @SpeakeasyMetadata({ data: "json, name=cover" })
  cover?: string;

  @SpeakeasyMetadata({ data: "json, name=coverFile" })
  coverFile?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=googleClassroom" })
  googleClassroom?: AssignmentCreationGoogleClassroom;

  @SpeakeasyMetadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=microsoftGraph" })
  microsoftGraph?: AssignmentCreationMicrosoftGraph;

  @SpeakeasyMetadata({ data: "json, name=nbPlaybackAuthorized" })
  nbPlaybackAuthorized?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduledDate" })
  scheduledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AssignmentCreationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=toolset" })
  toolset?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AssignmentTypeEnum;
}
