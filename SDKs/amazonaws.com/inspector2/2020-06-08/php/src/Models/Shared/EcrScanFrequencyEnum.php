<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum EcrScanFrequencyEnum: string
{
    case MANUAL = 'MANUAL';
    case SCAN_ON_PUSH = 'SCAN_ON_PUSH';
    case CONTINUOUS_SCAN = 'CONTINUOUS_SCAN';
}
