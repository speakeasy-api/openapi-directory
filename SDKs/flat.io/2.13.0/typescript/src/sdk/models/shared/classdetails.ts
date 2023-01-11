import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassStateEnum } from "./classstateenum";
import { GroupDetails } from "./groupdetails";



// ClassDetailsCanvas
/** 
 * Meta information provided by Canvs LMS
**/
export class ClassDetailsCanvas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum ClassDetailsCleverSubjectEnum {
    EnglishLanguageArts = "english/language arts",
    Math = "math",
    Science = "science",
    SocialStudies = "social studies",
    Language = "language",
    HomeroomAdvisory = "homeroom/advisory",
    InterventionsOnlineLearning = "interventions/online learning",
    TechnologyAndEngineering = "technology and engineering",
    PeAndHealth = "PE and health",
    ArtsAndMusic = "arts and music",
    Other = "other"
}


// ClassDetailsClever
/** 
 * Clever.com section-related information
**/
export class ClassDetailsClever extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modificationDate" })
  modificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: ClassDetailsCleverSubjectEnum;

  @SpeakeasyMetadata({ data: "json, name=termEndDate" })
  termEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termName" })
  termName?: string;

  @SpeakeasyMetadata({ data: "json, name=termStartDate" })
  termStartDate?: Date;
}


// ClassDetailsGoogleClassroom
/** 
 * Google Classroom course-related information
**/
export class ClassDetailsGoogleClassroom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// ClassDetailsGoogleDrive
/** 
 * Google Drive course-related information provided by Google Classroom
**/
export class ClassDetailsGoogleDrive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teacherFolderAlternateLink" })
  teacherFolderAlternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=teacherFolderId" })
  teacherFolderId?: string;
}

export enum ClassDetailsIssuesSyncReasonEnum {
    OtherOrgnanization = "otherOrgnanization",
    PersonalSubscription = "personalSubscription"
}


// ClassDetailsIssuesSync
/** 
 * A sync issue
**/
export class ClassDetailsIssuesSync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: ClassDetailsIssuesSyncReasonEnum;
}


// ClassDetailsIssues
/** 
 * Detected issues for this class
**/
export class ClassDetailsIssues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sync", elemType: ClassDetailsIssuesSync })
  sync?: ClassDetailsIssuesSync[];
}


// ClassDetailsLti
/** 
 * Meta information provided by the LTI consumer
**/
export class ClassDetailsLti extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextId" })
  contextId?: string;

  @SpeakeasyMetadata({ data: "json, name=contextLabel" })
  contextLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=contextTitle" })
  contextTitle?: string;
}


// ClassDetailsMfc
/** 
 * Meta information provided by Canvs LMS
**/
export class ClassDetailsMfc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class ClassDetailsMicrosoftGraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// ClassDetails
/** 
 * A classroom
**/
export class ClassDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignmentsCount" })
  assignmentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=canvas" })
  canvas?: ClassDetailsCanvas;

  @SpeakeasyMetadata({ data: "json, name=clever" })
  clever?: ClassDetailsClever;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollmentCode" })
  enrollmentCode?: string;

  @SpeakeasyMetadata({ data: "json, name=googleClassroom" })
  googleClassroom?: ClassDetailsGoogleClassroom;

  @SpeakeasyMetadata({ data: "json, name=googleDrive" })
  googleDrive?: ClassDetailsGoogleDrive;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: ClassDetailsIssues;

  @SpeakeasyMetadata({ data: "json, name=lti" })
  lti?: ClassDetailsLti;

  @SpeakeasyMetadata({ data: "json, name=mfc" })
  mfc?: ClassDetailsMfc;

  @SpeakeasyMetadata({ data: "json, name=microsoftGraph" })
  microsoftGraph?: ClassDetailsMicrosoftGraph;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClassStateEnum;

  @SpeakeasyMetadata({ data: "json, name=studentsGroup" })
  studentsGroup?: GroupDetails;

  @SpeakeasyMetadata({ data: "json, name=teachersGroup" })
  teachersGroup?: GroupDetails;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;
}
