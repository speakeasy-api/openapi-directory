package shared

type ScoreTrackStateEnum string

const (
	ScoreTrackStateEnumDraft     ScoreTrackStateEnum = "draft"
	ScoreTrackStateEnumCompleted ScoreTrackStateEnum = "completed"
	ScoreTrackStateEnumDeleted   ScoreTrackStateEnum = "deleted"
)
