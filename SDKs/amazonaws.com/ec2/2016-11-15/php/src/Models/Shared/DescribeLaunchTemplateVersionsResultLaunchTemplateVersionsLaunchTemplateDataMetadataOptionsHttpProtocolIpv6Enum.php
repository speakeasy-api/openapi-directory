<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p> <p>Default: <code>disabled</code> </p> */
enum DescribeLaunchTemplateVersionsResultLaunchTemplateVersionsLaunchTemplateDataMetadataOptionsHttpProtocolIpv6Enum: string
{
    case DISABLED = 'disabled';
    case ENABLED = 'enabled';
}
