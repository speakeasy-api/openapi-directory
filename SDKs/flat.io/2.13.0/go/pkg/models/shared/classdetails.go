package shared

import (
	"time"
)

// ClassDetailsCanvas
// Meta information provided by Canvs LMS
type ClassDetailsCanvas struct {
	Domain *string `json:"domain,omitempty"`
	ID     *string `json:"id,omitempty"`
}

type ClassDetailsCleverSubjectEnum string

const (
	ClassDetailsCleverSubjectEnumEnglishLanguageArts         ClassDetailsCleverSubjectEnum = "english/language arts"
	ClassDetailsCleverSubjectEnumMath                        ClassDetailsCleverSubjectEnum = "math"
	ClassDetailsCleverSubjectEnumScience                     ClassDetailsCleverSubjectEnum = "science"
	ClassDetailsCleverSubjectEnumSocialStudies               ClassDetailsCleverSubjectEnum = "social studies"
	ClassDetailsCleverSubjectEnumLanguage                    ClassDetailsCleverSubjectEnum = "language"
	ClassDetailsCleverSubjectEnumHomeroomAdvisory            ClassDetailsCleverSubjectEnum = "homeroom/advisory"
	ClassDetailsCleverSubjectEnumInterventionsOnlineLearning ClassDetailsCleverSubjectEnum = "interventions/online learning"
	ClassDetailsCleverSubjectEnumTechnologyAndEngineering    ClassDetailsCleverSubjectEnum = "technology and engineering"
	ClassDetailsCleverSubjectEnumPeAndHealth                 ClassDetailsCleverSubjectEnum = "PE and health"
	ClassDetailsCleverSubjectEnumArtsAndMusic                ClassDetailsCleverSubjectEnum = "arts and music"
	ClassDetailsCleverSubjectEnumOther                       ClassDetailsCleverSubjectEnum = "other"
)

// ClassDetailsClever
// Clever.com section-related information
type ClassDetailsClever struct {
	CreationDate     *time.Time                     `json:"creationDate,omitempty"`
	ID               *string                        `json:"id,omitempty"`
	ModificationDate *time.Time                     `json:"modificationDate,omitempty"`
	Subject          *ClassDetailsCleverSubjectEnum `json:"subject,omitempty"`
	TermEndDate      *time.Time                     `json:"termEndDate,omitempty"`
	TermName         *string                        `json:"termName,omitempty"`
	TermStartDate    *time.Time                     `json:"termStartDate,omitempty"`
}

// ClassDetailsGoogleClassroom
// Google Classroom course-related information
type ClassDetailsGoogleClassroom struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
}

// ClassDetailsGoogleDrive
// Google Drive course-related information provided by Google Classroom
type ClassDetailsGoogleDrive struct {
	TeacherFolderAlternateLink *string `json:"teacherFolderAlternateLink,omitempty"`
	TeacherFolderID            *string `json:"teacherFolderId,omitempty"`
}

type ClassDetailsIssuesSyncReasonEnum string

const (
	ClassDetailsIssuesSyncReasonEnumOtherOrgnanization   ClassDetailsIssuesSyncReasonEnum = "otherOrgnanization"
	ClassDetailsIssuesSyncReasonEnumPersonalSubscription ClassDetailsIssuesSyncReasonEnum = "personalSubscription"
)

// ClassDetailsIssuesSync
// A sync issue
type ClassDetailsIssuesSync struct {
	Email  *string                           `json:"email,omitempty"`
	ID     *string                           `json:"id,omitempty"`
	Reason *ClassDetailsIssuesSyncReasonEnum `json:"reason,omitempty"`
}

// ClassDetailsIssues
// Detected issues for this class
type ClassDetailsIssues struct {
	Sync []ClassDetailsIssuesSync `json:"sync,omitempty"`
}

// ClassDetailsLti
// Meta information provided by the LTI consumer
type ClassDetailsLti struct {
	ContextID    *string `json:"contextId,omitempty"`
	ContextLabel *string `json:"contextLabel,omitempty"`
	ContextTitle *string `json:"contextTitle,omitempty"`
}

// ClassDetailsMfc
// Meta information provided by Canvs LMS
type ClassDetailsMfc struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
}

type ClassDetailsMicrosoftGraph struct {
	ID *string `json:"id,omitempty"`
}

// ClassDetails
// A classroom
type ClassDetails struct {
	AssignmentsCount *float64                     `json:"assignmentsCount,omitempty"`
	Canvas           *ClassDetailsCanvas          `json:"canvas,omitempty"`
	Clever           *ClassDetailsClever          `json:"clever,omitempty"`
	CreationDate     *time.Time                   `json:"creationDate,omitempty"`
	Description      *string                      `json:"description,omitempty"`
	EnrollmentCode   *string                      `json:"enrollmentCode,omitempty"`
	GoogleClassroom  *ClassDetailsGoogleClassroom `json:"googleClassroom,omitempty"`
	GoogleDrive      *ClassDetailsGoogleDrive     `json:"googleDrive,omitempty"`
	ID               *string                      `json:"id,omitempty"`
	Issues           *ClassDetailsIssues          `json:"issues,omitempty"`
	Lti              *ClassDetailsLti             `json:"lti,omitempty"`
	Mfc              *ClassDetailsMfc             `json:"mfc,omitempty"`
	MicrosoftGraph   *ClassDetailsMicrosoftGraph  `json:"microsoftGraph,omitempty"`
	Name             *string                      `json:"name,omitempty"`
	Organization     *string                      `json:"organization,omitempty"`
	Owner            *string                      `json:"owner,omitempty"`
	Section          *string                      `json:"section,omitempty"`
	State            *ClassStateEnum              `json:"state,omitempty"`
	StudentsGroup    *GroupDetails                `json:"studentsGroup,omitempty"`
	TeachersGroup    *GroupDetails                `json:"teachersGroup,omitempty"`
	Theme            *string                      `json:"theme,omitempty"`
}
