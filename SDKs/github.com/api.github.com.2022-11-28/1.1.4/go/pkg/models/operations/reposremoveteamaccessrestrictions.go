// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"bytes"
	"encoding/json"
	"errors"
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposRemoveTeamAccessRestrictionsRequestBody1 struct {
	// The slug values for teams
	Teams []string `json:"teams"`
}

type ReposRemoveTeamAccessRestrictionsRequestBodyType string

const (
	ReposRemoveTeamAccessRestrictionsRequestBodyTypeReposRemoveTeamAccessRestrictionsRequestBody1 ReposRemoveTeamAccessRestrictionsRequestBodyType = "repos/remove-team-access-restrictions_requestBody_1"
	ReposRemoveTeamAccessRestrictionsRequestBodyTypeArrayOfstr                                    ReposRemoveTeamAccessRestrictionsRequestBodyType = "arrayOfstr"
)

type ReposRemoveTeamAccessRestrictionsRequestBody struct {
	ReposRemoveTeamAccessRestrictionsRequestBody1 *ReposRemoveTeamAccessRestrictionsRequestBody1
	ArrayOfstr                                    []string

	Type ReposRemoveTeamAccessRestrictionsRequestBodyType
}

func CreateReposRemoveTeamAccessRestrictionsRequestBodyReposRemoveTeamAccessRestrictionsRequestBody1(reposRemoveTeamAccessRestrictionsRequestBody1 ReposRemoveTeamAccessRestrictionsRequestBody1) ReposRemoveTeamAccessRestrictionsRequestBody {
	typ := ReposRemoveTeamAccessRestrictionsRequestBodyTypeReposRemoveTeamAccessRestrictionsRequestBody1

	return ReposRemoveTeamAccessRestrictionsRequestBody{
		ReposRemoveTeamAccessRestrictionsRequestBody1: &reposRemoveTeamAccessRestrictionsRequestBody1,
		Type: typ,
	}
}

func CreateReposRemoveTeamAccessRestrictionsRequestBodyArrayOfstr(arrayOfstr []string) ReposRemoveTeamAccessRestrictionsRequestBody {
	typ := ReposRemoveTeamAccessRestrictionsRequestBodyTypeArrayOfstr

	return ReposRemoveTeamAccessRestrictionsRequestBody{
		ArrayOfstr: arrayOfstr,
		Type:       typ,
	}
}

func (u *ReposRemoveTeamAccessRestrictionsRequestBody) UnmarshalJSON(data []byte) error {
	var d *json.Decoder

	reposRemoveTeamAccessRestrictionsRequestBody1 := new(ReposRemoveTeamAccessRestrictionsRequestBody1)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&reposRemoveTeamAccessRestrictionsRequestBody1); err == nil {
		u.ReposRemoveTeamAccessRestrictionsRequestBody1 = reposRemoveTeamAccessRestrictionsRequestBody1
		u.Type = ReposRemoveTeamAccessRestrictionsRequestBodyTypeReposRemoveTeamAccessRestrictionsRequestBody1
		return nil
	}

	arrayOfstr := []string{}
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&arrayOfstr); err == nil {
		u.ArrayOfstr = arrayOfstr
		u.Type = ReposRemoveTeamAccessRestrictionsRequestBodyTypeArrayOfstr
		return nil
	}

	return errors.New("could not unmarshal into supported union types")
}

func (u ReposRemoveTeamAccessRestrictionsRequestBody) MarshalJSON() ([]byte, error) {
	if u.ReposRemoveTeamAccessRestrictionsRequestBody1 != nil {
		return json.Marshal(u.ReposRemoveTeamAccessRestrictionsRequestBody1)
	}

	if u.ArrayOfstr != nil {
		return json.Marshal(u.ArrayOfstr)
	}

	return nil, nil
}

type ReposRemoveTeamAccessRestrictionsRequest struct {
	RequestBody *ReposRemoveTeamAccessRestrictionsRequestBody `request:"mediaType=application/json"`
	// The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposRemoveTeamAccessRestrictionsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	Teams []shared.Team
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
