# SDK

## Overview

# Introduction
The Business Registries API is built on HTTP. The API is RESTful. It has predictable resource URIs.

  The API is documented in <a target="_blank" href="https://github.com/OAI/OpenAPI-Specification">OpenAPI</a> format.
  In addition to the standard OpenAPI syntax we use a few
  <a target="_blank" href="https://github.com/Rebilly/ReDoc/blob/master/docs/redoc-vendor-extensions.md">vendor extensions</a>.

# Overview
The following sections describe the resources that make up the Business Registries REST API.
## Current Version
By default, all requests to https://api.abr.ato.gov.au receive the `v1` version of the REST API. We encourage you to explicitly request this version via the `Accept` header.

    Accept: application/vnd.abr-ato.v1+json

## Schema
All API access is over HTTPS, and accessed from https://api.abr.ato.gov.au. All data is sent and received as JSON. Blank fields are included.

  All dates use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:

    YYYY-MM-DD

  For example: `2017-07-01` (the 1st of July 2017)

  All timestamps use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:

    YYYY-MM-DDTHH:MM:SSZ

  For example: `2017-07-01T11:05:06+10:00`

## Timezones
Some requests allow for specifying timestamps or generate timestamps with time zone information. We apply the following rules, in order of priority, to determine timezone information for API calls.
### Explicitly provide an ISO 8601 timestamp with timezone information
For API calls that allow for a timestamp to be specified, we use that exact timestamp.

  For example: `2017-07-01T11:05:06+10:00`

## Pagination
Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.

  For example:

    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",
          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"

`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.
## Parameters
Many API methods take optional parameters:

    GET /individuals/1234/addresses/?addressType='Mailing'

In this example, the '1234' value is provided for the `:partyId` parameter in the path while `:addressType` is passed in the query string.
For POST, PATCH, PUT, and DELETE requests, parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json'.
## Metadata
The API provides **metadata services** that you can use to discover information about the classifcation schemes and values used by the Registry.

  For example:

    GET /classifications/roles

  Sample response:

    [
      {
        "id": "123e4567-e89b-12d3-a456-426655440001",
        "role": "Director",
        "roleDescription": "An individual responsible for managing a company's ...",
        "relationship": "Directorship",
        "reciprocalRole": "Company",
        "reciprocalRoleDescription": "An incorporated legal entity."
      },
      {
        ...
      }
    ]

## Root Endpoint
You can issue a GET request to the root endpoint (also known as the service root) to get all the endpoint categories that the REST API supports:

    curl https://api.abr.ato.gov.au

## Authentication
The Business Registries API supports API Key authentication.

  When you sign up for an account, you are given your first API key. You can generate additional API keys, and delete
  API keys (as you may need to rotate your keys in the future). You authenticate to the Business Registries API by
  providing your secret key in the request header.

  **Note:** Some requests will return `404 Not Found`, instead of `403 Permission Denied`. This is to prevent the
  accidental leakage of information to unauthorised users.


### Available Operations

