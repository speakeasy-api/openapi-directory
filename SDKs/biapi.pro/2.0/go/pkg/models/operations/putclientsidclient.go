// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PutClientsIDClientRequestBody struct {
	// custom config about the client
	Config *string `multipartForm:"name=config"`
	// text to display as a default description
	Description *string `multipartForm:"name=description"`
	// text to display as a description for banks
	DescriptionBanks *string `multipartForm:"name=description_banks"`
	// text to display as a description for providers
	DescriptionProviders *string `multipartForm:"name=description_providers"`
	// set a rsa key pair for the client, which make it possible to generate a jwt user token using this client. No effect if the client already has a set of keys(default: False)
	GenerateKeys *bool `multipartForm:"name=generate_keys"`
	// name of client
	Name *string `multipartForm:"name=name"`
	// hexadecimal code of the client primary color (e.g F45B9A)
	PrimaryColor *string `multipartForm:"name=primary_color"`
	// Wether the client should display the company manager page
	Pro *bool `multipartForm:"name=pro"`
	// list of allowed redirect uris
	RedirectUris *string `multipartForm:"name=redirect_uris"`
	// hexadecimal code of the client secondary color (e.g F45B9A)
	SecondaryColor *string `multipartForm:"name=secondary_color"`
	// reset the secret
	Secret *bool `multipartForm:"name=secret"`
	// update the custom information about the client instead of replacing the existing one (default: True)
	UpdateConfig *bool `multipartForm:"name=update_config"`
}

type PutClientsIDClientRequest struct {
	RequestBody *PutClientsIDClientRequestBody `request:"mediaType=multipart/form-data"`
	Expand      *string                        `queryParam:"style=form,explode=true,name=expand"`
	IDClient    int64                          `pathParam:"style=simple,explode=false,name=id_client"`
}

type PutClientsIDClientResponse struct {
	// Successful PUT on Client resource
	Client      *shared.Client
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
