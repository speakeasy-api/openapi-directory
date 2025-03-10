// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type BlockTypeEnum string

const (
	BlockTypeEnumKeyValueSet      BlockTypeEnum = "KEY_VALUE_SET"
	BlockTypeEnumPage             BlockTypeEnum = "PAGE"
	BlockTypeEnumLine             BlockTypeEnum = "LINE"
	BlockTypeEnumWord             BlockTypeEnum = "WORD"
	BlockTypeEnumTable            BlockTypeEnum = "TABLE"
	BlockTypeEnumCell             BlockTypeEnum = "CELL"
	BlockTypeEnumSelectionElement BlockTypeEnum = "SELECTION_ELEMENT"
	BlockTypeEnumMergedCell       BlockTypeEnum = "MERGED_CELL"
	BlockTypeEnumTitle            BlockTypeEnum = "TITLE"
	BlockTypeEnumQuery            BlockTypeEnum = "QUERY"
	BlockTypeEnumQueryResult      BlockTypeEnum = "QUERY_RESULT"
	BlockTypeEnumSignature        BlockTypeEnum = "SIGNATURE"
	BlockTypeEnumTableTitle       BlockTypeEnum = "TABLE_TITLE"
	BlockTypeEnumTableFooter      BlockTypeEnum = "TABLE_FOOTER"
)

func (e BlockTypeEnum) ToPointer() *BlockTypeEnum {
	return &e
}

func (e *BlockTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "KEY_VALUE_SET":
		fallthrough
	case "PAGE":
		fallthrough
	case "LINE":
		fallthrough
	case "WORD":
		fallthrough
	case "TABLE":
		fallthrough
	case "CELL":
		fallthrough
	case "SELECTION_ELEMENT":
		fallthrough
	case "MERGED_CELL":
		fallthrough
	case "TITLE":
		fallthrough
	case "QUERY":
		fallthrough
	case "QUERY_RESULT":
		fallthrough
	case "SIGNATURE":
		fallthrough
	case "TABLE_TITLE":
		fallthrough
	case "TABLE_FOOTER":
		*e = BlockTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for BlockTypeEnum: %v", v)
	}
}
