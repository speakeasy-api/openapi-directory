package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreRevisionDataFormatEnum string

const (
	GetScoreRevisionDataFormatEnumJSON                  GetScoreRevisionDataFormatEnum = "json"
	GetScoreRevisionDataFormatEnumMxl                   GetScoreRevisionDataFormatEnum = "mxl"
	GetScoreRevisionDataFormatEnumXML                   GetScoreRevisionDataFormatEnum = "xml"
	GetScoreRevisionDataFormatEnumMp3                   GetScoreRevisionDataFormatEnum = "mp3"
	GetScoreRevisionDataFormatEnumWav                   GetScoreRevisionDataFormatEnum = "wav"
	GetScoreRevisionDataFormatEnumMidi                  GetScoreRevisionDataFormatEnum = "midi"
	GetScoreRevisionDataFormatEnumThumbnailPng          GetScoreRevisionDataFormatEnum = "thumbnail.png"
	GetScoreRevisionDataFormatEnumSynchronizationPoints GetScoreRevisionDataFormatEnum = "synchronizationPoints"
)

type GetScoreRevisionDataPathParams struct {
	Format   GetScoreRevisionDataFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Revision string                         `pathParam:"style=simple,explode=false,name=revision"`
	Score    string                         `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreRevisionDataQueryParams struct {
	OnlyCached *bool   `queryParam:"style=form,explode=true,name=onlyCached"`
	Parts      *string `queryParam:"style=form,explode=true,name=parts"`
	SharingKey *string `queryParam:"style=form,explode=true,name=sharingKey"`
	URL        *bool   `queryParam:"style=form,explode=true,name=url"`
}

type GetScoreRevisionDataSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreRevisionDataRequest struct {
	PathParams  GetScoreRevisionDataPathParams
	QueryParams GetScoreRevisionDataQueryParams
	Security    GetScoreRevisionDataSecurity
}

type GetScoreRevisionDataResponse struct {
	ContentType                                                               string
	FlatErrorResponse                                                         *shared.FlatErrorResponse
	StatusCode                                                                int64
	GetScoreRevisionData200ApplicationJSONBinaryString                        []byte
	GetScoreRevisionData200ApplicationVndRecordareMusicxmlPlusXMLBinaryString []byte
	GetScoreRevisionData200ApplicationVndRecordareMusicxmlBinaryString        []byte
	GetScoreRevisionData200AudioMidiBinaryString                              []byte
	GetScoreRevisionData200AudioMp3BinaryString                               []byte
	GetScoreRevisionData200AudioWavBinaryString                               []byte
	GetScoreRevisionData200ImagePngBinaryString                               []byte
}
