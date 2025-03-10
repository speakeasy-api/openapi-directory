// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// EnterpriseAdminListPublicKeysSortEnum
type EnterpriseAdminListPublicKeysSortEnum string

const (
	EnterpriseAdminListPublicKeysSortEnumCreated  EnterpriseAdminListPublicKeysSortEnum = "created"
	EnterpriseAdminListPublicKeysSortEnumUpdated  EnterpriseAdminListPublicKeysSortEnum = "updated"
	EnterpriseAdminListPublicKeysSortEnumAccessed EnterpriseAdminListPublicKeysSortEnum = "accessed"
)

func (e EnterpriseAdminListPublicKeysSortEnum) ToPointer() *EnterpriseAdminListPublicKeysSortEnum {
	return &e
}

func (e *EnterpriseAdminListPublicKeysSortEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "created":
		fallthrough
	case "updated":
		fallthrough
	case "accessed":
		*e = EnterpriseAdminListPublicKeysSortEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EnterpriseAdminListPublicKeysSortEnum: %v", v)
	}
}

type EnterpriseAdminListPublicKeysRequest struct {
	// One of `asc` (ascending) or `desc` (descending).
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// Results per page (max 100)
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// Only show public keys accessed after the given time.
	Since *string                                `queryParam:"style=form,explode=true,name=since"`
	Sort  *EnterpriseAdminListPublicKeysSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type EnterpriseAdminListPublicKeysResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	PublicKeyFulls []shared.PublicKeyFull
}
