<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** <p>IMDSv2 uses token-backed sessions. Indicates whether the use of HTTP tokens is <code>optional</code> (in other words, indicates whether the use of IMDSv2 is <code>optional</code>) or <code>required</code> (in other words, indicates whether the use of IMDSv2 is <code>required</code>).</p> <ul> <li> <p> <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without a session token in your request. If you retrieve the IAM role credentials without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials using a valid session token, the IMDSv2 role credentials are returned.</p> </li> <li> <p> <code>required</code> - When IMDSv2 is required, you must send a session token with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p> </li> </ul> <p>Default: <code>optional</code> </p> */
enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpTokensEnum: string
{
    case OPTIONAL = 'optional';
    case REQUIRED = 'required';
}
