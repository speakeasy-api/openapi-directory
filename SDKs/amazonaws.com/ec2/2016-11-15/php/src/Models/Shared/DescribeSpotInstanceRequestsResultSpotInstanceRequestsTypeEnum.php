<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The Spot Instance request type. */
enum DescribeSpotInstanceRequestsResultSpotInstanceRequestsTypeEnum: string
{
    case ONE_TIME = 'one-time';
    case PERSISTENT = 'persistent';
}
