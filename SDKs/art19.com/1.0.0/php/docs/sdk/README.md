# SDK

## Overview

The ART19 Content API conforms to the [JSON:API specification](http://jsonapi.org).

API requests **MUST** use the HTTP Accept header:

`Accept: application/vnd.api+json`

API requests **MUST** be authenticated using the HTTP Authorization header:

`Authorization: Token token="your-token", credential="your-credential"`

## General Notes

Some query parameters use unencoded [ and ] characters simply for readability. Defaults, examples, and
possible values are additionally rendered in double quotes for readability. In practice, query parameters should
not have quotes around the values (e.g., `foo=bar` is valid, not `foo="bar"`), and both query parameter keys
and values must be percent-encoded, per the requirements in [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).

## Rate Limiting

In order to provide a fair distribution of available resources, all API calls are subject to rate limits.
If you exceed the number of API calls per minute granted to your credential, a `429 Too Many Requests`
error response will be returned.

In that case, a `Retry-After` header MAY be included in the response, describing the number of seconds
after which a request can be retried.

If you run into a high number of 429 errors, please reach out to ART19 Support to adjust your rate limit.

### Example

In the following example the request can be retried after waiting for 21 seconds:

    HTTP/1.1 429 Too Many Requests
    Content-Type: text/html
    Retry-After: 21

## Pagination

Requests to collection endpoints **SHOULD** provide pagination parameters.
Some endpoints **REQUIRE** pagination parameters to be provided.
Whenever pagination is provided, it **MUST** be valid.
Failing to provide pagination when it is required or providing wrong or incomplete pagination
always results in a `400 Bad Request` error response.

The page numbering starts with `1` and the maximum page size (if not otherwise documented
on an endpoint) is `100`. Pagination **MUST NOT** be specified if requesting a list of IDs (using an `ids[]` parameter).

Providing invalid values for page number or page size, as well as providing only a page number or only a page size,
is considered an error. Pagination is provided like this:

`page[number]=1&page[size]=25`

Responses conform to the [JSON:API specification's pagination section](https://jsonapi.org/format/#fetching-pagination)
by including pagination links. Your requested page size will be carried into the pagination links.

## Sorting

Requests to collection endpoints usually accept a `sort` parameter. Please refer to the
[JSON:API Specification's sorting section](https://jsonapi.org/format/#fetching-sorting) for further details.

## Relationship Linking

Currently, resources return all of their relationships, in no particular order, pursuant to how relationships
should be returned [according to the JSON:API specification](https://jsonapi.org/format/#document-resource-object-relationships). Consumers of this API
**MUST NOT** make assumptions about the order of these collections. Even though this data is not currently paginated, consumers **MUST** support
paginating relationships per the JSON:API specification if this data is important for their application.


### Available Operations

