package shared

import (
	"time"
)

type DescribeCollectionResponse struct {
	CollectionARN     *string    `json:"CollectionARN,omitempty"`
	CreationTimestamp *time.Time `json:"CreationTimestamp,omitempty"`
	FaceCount         *int64     `json:"FaceCount,omitempty"`
	FaceModelVersion  *string    `json:"FaceModelVersion,omitempty"`
}
