// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type KeyAlgorithmEnum string

const (
	KeyAlgorithmEnumRsa1024      KeyAlgorithmEnum = "RSA_1024"
	KeyAlgorithmEnumRsa2048      KeyAlgorithmEnum = "RSA_2048"
	KeyAlgorithmEnumRsa3072      KeyAlgorithmEnum = "RSA_3072"
	KeyAlgorithmEnumRsa4096      KeyAlgorithmEnum = "RSA_4096"
	KeyAlgorithmEnumEcPrime256v1 KeyAlgorithmEnum = "EC_prime256v1"
	KeyAlgorithmEnumEcSecp384r1  KeyAlgorithmEnum = "EC_secp384r1"
	KeyAlgorithmEnumEcSecp521r1  KeyAlgorithmEnum = "EC_secp521r1"
)

func (e KeyAlgorithmEnum) ToPointer() *KeyAlgorithmEnum {
	return &e
}

func (e *KeyAlgorithmEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "RSA_1024":
		fallthrough
	case "RSA_2048":
		fallthrough
	case "RSA_3072":
		fallthrough
	case "RSA_4096":
		fallthrough
	case "EC_prime256v1":
		fallthrough
	case "EC_secp384r1":
		fallthrough
	case "EC_secp521r1":
		*e = KeyAlgorithmEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for KeyAlgorithmEnum: %v", v)
	}
}
