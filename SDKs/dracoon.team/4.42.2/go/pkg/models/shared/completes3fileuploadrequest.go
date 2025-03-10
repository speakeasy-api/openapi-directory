// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CompleteS3FileUploadRequestResolutionStrategyEnum - Node conflict resolution strategy:
//
// * `autorename`
//
// * `overwrite`
//
// * `fail`
type CompleteS3FileUploadRequestResolutionStrategyEnum string

const (
	CompleteS3FileUploadRequestResolutionStrategyEnumAutorename CompleteS3FileUploadRequestResolutionStrategyEnum = "autorename"
	CompleteS3FileUploadRequestResolutionStrategyEnumOverwrite  CompleteS3FileUploadRequestResolutionStrategyEnum = "overwrite"
	CompleteS3FileUploadRequestResolutionStrategyEnumFail       CompleteS3FileUploadRequestResolutionStrategyEnum = "fail"
)

func (e *CompleteS3FileUploadRequestResolutionStrategyEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "autorename":
		fallthrough
	case "overwrite":
		fallthrough
	case "fail":
		*e = CompleteS3FileUploadRequestResolutionStrategyEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for CompleteS3FileUploadRequestResolutionStrategyEnum: %s", s)
	}
}

// CompleteS3FileUploadRequest - Request model for completing a S3 file upload
type CompleteS3FileUploadRequest struct {
	// File key information
	FileKey *FileKey `json:"fileKey,omitempty"`
	// New file name to store with
	FileName *string `json:"fileName,omitempty"`
	// Preserve Download Share Links and point them to the new node.
	KeepShareLinks *bool `json:"keepShareLinks,omitempty"`
	// List of S3 file upload parts
	Parts []S3FileUploadPart `json:"parts"`
	// Node conflict resolution strategy:
	//
	// * `autorename`
	//
	// * `overwrite`
	//
	// * `fail`
	ResolutionStrategy *CompleteS3FileUploadRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}
