// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type BatchWriteExceptionTypeEnum string

const (
	BatchWriteExceptionTypeEnumInternalServiceException         BatchWriteExceptionTypeEnum = "InternalServiceException"
	BatchWriteExceptionTypeEnumValidationException              BatchWriteExceptionTypeEnum = "ValidationException"
	BatchWriteExceptionTypeEnumInvalidArnException              BatchWriteExceptionTypeEnum = "InvalidArnException"
	BatchWriteExceptionTypeEnumLinkNameAlreadyInUseException    BatchWriteExceptionTypeEnum = "LinkNameAlreadyInUseException"
	BatchWriteExceptionTypeEnumStillContainsLinksException      BatchWriteExceptionTypeEnum = "StillContainsLinksException"
	BatchWriteExceptionTypeEnumFacetValidationException         BatchWriteExceptionTypeEnum = "FacetValidationException"
	BatchWriteExceptionTypeEnumObjectNotDetachedException       BatchWriteExceptionTypeEnum = "ObjectNotDetachedException"
	BatchWriteExceptionTypeEnumResourceNotFoundException        BatchWriteExceptionTypeEnum = "ResourceNotFoundException"
	BatchWriteExceptionTypeEnumAccessDeniedException            BatchWriteExceptionTypeEnum = "AccessDeniedException"
	BatchWriteExceptionTypeEnumInvalidAttachmentException       BatchWriteExceptionTypeEnum = "InvalidAttachmentException"
	BatchWriteExceptionTypeEnumNotIndexException                BatchWriteExceptionTypeEnum = "NotIndexException"
	BatchWriteExceptionTypeEnumNotNodeException                 BatchWriteExceptionTypeEnum = "NotNodeException"
	BatchWriteExceptionTypeEnumIndexedAttributeMissingException BatchWriteExceptionTypeEnum = "IndexedAttributeMissingException"
	BatchWriteExceptionTypeEnumObjectAlreadyDetachedException   BatchWriteExceptionTypeEnum = "ObjectAlreadyDetachedException"
	BatchWriteExceptionTypeEnumNotPolicyException               BatchWriteExceptionTypeEnum = "NotPolicyException"
	BatchWriteExceptionTypeEnumDirectoryNotEnabledException     BatchWriteExceptionTypeEnum = "DirectoryNotEnabledException"
	BatchWriteExceptionTypeEnumLimitExceededException           BatchWriteExceptionTypeEnum = "LimitExceededException"
	BatchWriteExceptionTypeEnumUnsupportedIndexTypeException    BatchWriteExceptionTypeEnum = "UnsupportedIndexTypeException"
)

func (e BatchWriteExceptionTypeEnum) ToPointer() *BatchWriteExceptionTypeEnum {
	return &e
}

func (e *BatchWriteExceptionTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "InternalServiceException":
		fallthrough
	case "ValidationException":
		fallthrough
	case "InvalidArnException":
		fallthrough
	case "LinkNameAlreadyInUseException":
		fallthrough
	case "StillContainsLinksException":
		fallthrough
	case "FacetValidationException":
		fallthrough
	case "ObjectNotDetachedException":
		fallthrough
	case "ResourceNotFoundException":
		fallthrough
	case "AccessDeniedException":
		fallthrough
	case "InvalidAttachmentException":
		fallthrough
	case "NotIndexException":
		fallthrough
	case "NotNodeException":
		fallthrough
	case "IndexedAttributeMissingException":
		fallthrough
	case "ObjectAlreadyDetachedException":
		fallthrough
	case "NotPolicyException":
		fallthrough
	case "DirectoryNotEnabledException":
		fallthrough
	case "LimitExceededException":
		fallthrough
	case "UnsupportedIndexTypeException":
		*e = BatchWriteExceptionTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for BatchWriteExceptionTypeEnum: %v", v)
	}
}
