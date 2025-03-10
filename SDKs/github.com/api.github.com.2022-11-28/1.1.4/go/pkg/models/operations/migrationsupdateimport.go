// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// MigrationsUpdateImportRequestBodyVcsEnum - The type of version control system you are migrating from.
type MigrationsUpdateImportRequestBodyVcsEnum string

const (
	MigrationsUpdateImportRequestBodyVcsEnumSubversion MigrationsUpdateImportRequestBodyVcsEnum = "subversion"
	MigrationsUpdateImportRequestBodyVcsEnumTfvc       MigrationsUpdateImportRequestBodyVcsEnum = "tfvc"
	MigrationsUpdateImportRequestBodyVcsEnumGit        MigrationsUpdateImportRequestBodyVcsEnum = "git"
	MigrationsUpdateImportRequestBodyVcsEnumMercurial  MigrationsUpdateImportRequestBodyVcsEnum = "mercurial"
)

func (e MigrationsUpdateImportRequestBodyVcsEnum) ToPointer() *MigrationsUpdateImportRequestBodyVcsEnum {
	return &e
}

func (e *MigrationsUpdateImportRequestBodyVcsEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "subversion":
		fallthrough
	case "tfvc":
		fallthrough
	case "git":
		fallthrough
	case "mercurial":
		*e = MigrationsUpdateImportRequestBodyVcsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for MigrationsUpdateImportRequestBodyVcsEnum: %v", v)
	}
}

type MigrationsUpdateImportRequestBody struct {
	// For a tfvc import, the name of the project that is being imported.
	TfvcProject *string `json:"tfvc_project,omitempty"`
	// The type of version control system you are migrating from.
	Vcs *MigrationsUpdateImportRequestBodyVcsEnum `json:"vcs,omitempty"`
	// The password to provide to the originating repository.
	VcsPassword *string `json:"vcs_password,omitempty"`
	// The username to provide to the originating repository.
	VcsUsername *string `json:"vcs_username,omitempty"`
}

type MigrationsUpdateImportRequest struct {
	RequestBody *MigrationsUpdateImportRequestBody `request:"mediaType=application/json"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsUpdateImportResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Unavailable due to service under maintenance.
	BasicError *shared.BasicError
	// Response
	Import *shared.Import
}
