<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To list retention rules that retain snapshots, specify <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>. */
enum ListRulesRequestBodyResourceTypeEnum: string
{
    case EBS_SNAPSHOT = 'EBS_SNAPSHOT';
    case EC2_IMAGE = 'EC2_IMAGE';
}
