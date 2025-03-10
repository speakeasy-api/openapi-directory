<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or disabled.</p> <p>If the value is <code>disabled</code>, you cannot access your instance metadata.</p> */
enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpEndpointEnum: string
{
    case DISABLED = 'disabled';
    case ENABLED = 'enabled';
}
