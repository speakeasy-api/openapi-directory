package shared

type ScoreTrackPointTypeEnum string

const (
	ScoreTrackPointTypeEnumMeasure ScoreTrackPointTypeEnum = "measure"
	ScoreTrackPointTypeEnumEnd     ScoreTrackPointTypeEnum = "end"
)

// ScoreTrackPoint
// A track synchronization point
type ScoreTrackPoint struct {
	MeasureUUID *string                 `json:"measureUuid,omitempty"`
	Time        float64                 `json:"time"`
	Type        ScoreTrackPointTypeEnum `json:"type"`
}
