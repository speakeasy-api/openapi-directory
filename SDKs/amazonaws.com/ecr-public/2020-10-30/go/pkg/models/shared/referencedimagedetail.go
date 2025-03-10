// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ReferencedImageDetail - An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action.
type ReferencedImageDetail struct {
	ArtifactMediaType      *string    `json:"artifactMediaType,omitempty"`
	ImageDigest            *string    `json:"imageDigest,omitempty"`
	ImageManifestMediaType *string    `json:"imageManifestMediaType,omitempty"`
	ImagePushedAt          *time.Time `json:"imagePushedAt,omitempty"`
	ImageSizeInBytes       *int64     `json:"imageSizeInBytes,omitempty"`
}
