// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type PostSpacesSpaceIDPersonsIDInvitationSecurity struct {
	GmaAuth string `security:"scheme,type=oauth2,name=Authorization"`
}

type PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum string

const (
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnumNo      PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum = "no"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnumManager PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum = "manager"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnumAdn     PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum = "adn"
)

func (e PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum) ToPointer() *PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum {
	return &e
}

func (e *PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "no":
		fallthrough
	case "manager":
		fallthrough
	case "adn":
		*e = PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum: %v", v)
	}
}

type PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum string

const (
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnumRead  PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum = "read"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnumWrite PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum = "write"
)

func (e PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum) ToPointer() *PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum {
	return &e
}

func (e *PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "read":
		fallthrough
	case "write":
		*e = PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum: %v", v)
	}
}

type PostSpacesSpaceIDPersonsIDInvitationRequestBodyFolders struct {
	ID    *string                                                          `json:"Id,omitempty"`
	Right *PostSpacesSpaceIDPersonsIDInvitationRequestBodyFoldersRightEnum `json:"Right,omitempty"`
}

type PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum string

const (
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumGuest        PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum = "guest"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumOwner        PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum = "owner"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumManager      PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum = "manager"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumAssistant    PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum = "assistant"
	PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnumCollaborator PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum = "collaborator"
)

func (e PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum) ToPointer() *PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum {
	return &e
}

func (e *PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "guest":
		fallthrough
	case "owner":
		fallthrough
	case "manager":
		fallthrough
	case "assistant":
		fallthrough
	case "collaborator":
		*e = PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum: %v", v)
	}
}

// PostSpacesSpaceIDPersonsIDInvitationRequestBody - Invitation to create
type PostSpacesSpaceIDPersonsIDInvitationRequestBody struct {
	ClientManagement *PostSpacesSpaceIDPersonsIDInvitationRequestBodyClientManagementEnum `json:"ClientManagement,omitempty"`
	EmployeeAccess   *bool                                                                `json:"EmployeeAccess,omitempty"`
	Folders          []PostSpacesSpaceIDPersonsIDInvitationRequestBodyFolders             `json:"Folders,omitempty"`
	GroupIds         []string                                                             `json:"GroupIds,omitempty"`
	IsAdmin          *bool                                                                `json:"IsAdmin,omitempty"`
	Player           *PostSpacesSpaceIDPersonsIDInvitationRequestBodyPlayerEnum           `json:"Player,omitempty"`
	PlayerEnd        *string                                                              `json:"PlayerEnd,omitempty"`
}

type PostSpacesSpaceIDPersonsIDInvitationRequest struct {
	// Invitation to create
	RequestBody PostSpacesSpaceIDPersonsIDInvitationRequestBody `request:"mediaType=application/json"`
	// Id of the person
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// Id of the space
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
}

// PostSpacesSpaceIDPersonsIDInvitation201ApplicationJSON - Id of invitation created
type PostSpacesSpaceIDPersonsIDInvitation201ApplicationJSON struct {
	ID *string `json:"Id,omitempty"`
}

type PostSpacesSpaceIDPersonsIDInvitationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Id of invitation created
	PostSpacesSpaceIDPersonsIDInvitation201ApplicationJSONObject *PostSpacesSpaceIDPersonsIDInvitation201ApplicationJSON
}
