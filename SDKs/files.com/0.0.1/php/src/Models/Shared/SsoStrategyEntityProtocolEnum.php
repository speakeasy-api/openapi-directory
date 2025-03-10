<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** SSO Protocol */
enum SsoStrategyEntityProtocolEnum: string
{
    case OAUTH2 = 'oauth2';
    case UNUSED_OPENID2 = '_unused_openid2';
    case SAML = 'saml';
    case ACTIVE_DIRECTORY = 'active_directory';
    case OPEN_LDAP = 'open_ldap';
    case SCIM = 'scim';
}
