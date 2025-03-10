// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETGETContextKeysForPrincipalPolicyActionEnum
type GETGETContextKeysForPrincipalPolicyActionEnum string

const (
	GETGETContextKeysForPrincipalPolicyActionEnumGetContextKeysForPrincipalPolicy GETGETContextKeysForPrincipalPolicyActionEnum = "GetContextKeysForPrincipalPolicy"
)

func (e GETGETContextKeysForPrincipalPolicyActionEnum) ToPointer() *GETGETContextKeysForPrincipalPolicyActionEnum {
	return &e
}

func (e *GETGETContextKeysForPrincipalPolicyActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "GetContextKeysForPrincipalPolicy":
		*e = GETGETContextKeysForPrincipalPolicyActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETGETContextKeysForPrincipalPolicyActionEnum: %v", v)
	}
}

// GETGETContextKeysForPrincipalPolicyVersionEnum
type GETGETContextKeysForPrincipalPolicyVersionEnum string

const (
	GETGETContextKeysForPrincipalPolicyVersionEnumTwoThousandAndTen0508 GETGETContextKeysForPrincipalPolicyVersionEnum = "2010-05-08"
)

func (e GETGETContextKeysForPrincipalPolicyVersionEnum) ToPointer() *GETGETContextKeysForPrincipalPolicyVersionEnum {
	return &e
}

func (e *GETGETContextKeysForPrincipalPolicyVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-05-08":
		*e = GETGETContextKeysForPrincipalPolicyVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETGETContextKeysForPrincipalPolicyVersionEnum: %v", v)
	}
}

type GETGETContextKeysForPrincipalPolicyRequest struct {
	Action GETGETContextKeysForPrincipalPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// <p>An optional list of additional policies for which you want the list of context keys that are referenced.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
	PolicyInputList []string `queryParam:"style=form,explode=true,name=PolicyInputList"`
	// <p>The ARN of a user, group, or role whose policies contain the context keys that you want listed. If you specify a user, the list includes context keys that are found in all policies that are attached to the user. The list also includes all groups that the user is a member of. If you pick a group or a role, then it includes only those context keys that are found in policies attached to that entity. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
	PolicySourceArn   string                                         `queryParam:"style=form,explode=true,name=PolicySourceArn"`
	Version           GETGETContextKeysForPrincipalPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETGETContextKeysForPrincipalPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
