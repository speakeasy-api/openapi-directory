<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The status of the VPC link. */
enum GetVpcLinkResponseVpcLinkStatusEnum: string
{
    case PENDING = 'PENDING';
    case AVAILABLE = 'AVAILABLE';
    case DELETING = 'DELETING';
    case FAILED = 'FAILED';
    case INACTIVE = 'INACTIVE';
}
