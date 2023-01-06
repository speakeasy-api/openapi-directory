package shared

type AssignmentTypeEnum string

const (
	AssignmentTypeEnumNone          AssignmentTypeEnum = "none"
	AssignmentTypeEnumNewScore      AssignmentTypeEnum = "newScore"
	AssignmentTypeEnumScoreTemplate AssignmentTypeEnum = "scoreTemplate"
	AssignmentTypeEnumSharedWriting AssignmentTypeEnum = "sharedWriting"
	AssignmentTypeEnumWorksheet     AssignmentTypeEnum = "worksheet"
	AssignmentTypeEnumPerformance   AssignmentTypeEnum = "performance"
)
