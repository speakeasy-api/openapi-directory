<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum JoinTypeEnum: string
{
    case EQUIJOIN = 'equijoin';
    case LEFT = 'left';
    case RIGHT = 'right';
    case OUTER = 'outer';
    case LEFTSEMI = 'leftsemi';
    case LEFTANTI = 'leftanti';
}
