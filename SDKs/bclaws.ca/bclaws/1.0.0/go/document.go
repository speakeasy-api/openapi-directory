package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Document struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDocument(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Document {
	return &Document{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDocumentIDAspectIDCivixIndexIDCivixDocumentID - Retrieves a specific document from the BCLaws legislative repository (HTML format)
// The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
func (s *Document) GetDocumentIDAspectIDCivixIndexIDCivixDocumentID(ctx context.Context, request operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDRequest) (*operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchString - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
// The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
func (s *Document) GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchString(ctx context.Context, request operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringRequest) (*operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXML - Retrieves a specific document from the BCLaws legislative repository (XML format)
// The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
func (s *Document) GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXML(ctx context.Context, request operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLRequest) (*operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchString - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)
// The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
func (s *Document) GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchString(ctx context.Context, request operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringRequest) (*operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
