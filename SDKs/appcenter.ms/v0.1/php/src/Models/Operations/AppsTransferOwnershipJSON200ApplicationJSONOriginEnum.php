<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The creation origin of this app */
enum AppsTransferOwnershipJSON200ApplicationJSONOriginEnum: string
{
    case APPCENTER = 'appcenter';
    case HOCKEYAPP = 'hockeyapp';
    case CODEPUSH = 'codepush';
}
