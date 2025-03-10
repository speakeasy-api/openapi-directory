// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// TokensEnum - specifies what tokens (xpub addresses) are returned by the request (default nonzero)
type TokensEnum string

const (
	TokensEnumNonzero TokensEnum = "nonzero"
	TokensEnumUsed    TokensEnum = "used"
	TokensEnumDerived TokensEnum = "derived"
)

func (e TokensEnum) ToPointer() *TokensEnum {
	return &e
}

func (e *TokensEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "nonzero":
		fallthrough
	case "used":
		fallthrough
	case "derived":
		*e = TokensEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TokensEnum: %v", v)
	}
}
