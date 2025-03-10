<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum ServiceNetworkVpcAssociationStatusEnum: string
{
    case CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS';
    case ACTIVE = 'ACTIVE';
    case UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS';
    case DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS';
    case CREATE_FAILED = 'CREATE_FAILED';
    case DELETE_FAILED = 'DELETE_FAILED';
    case UPDATE_FAILED = 'UPDATE_FAILED';
}
