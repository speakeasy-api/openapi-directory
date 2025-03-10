<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Indicates whether access to instance tags from the instance metadata is enabled or disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with instance tags using the instance metadata</a>. */
enum ReservationInstancesMetadataOptionsInstanceMetadataTagsEnum: string
{
    case DISABLED = 'disabled';
    case ENABLED = 'enabled';
}
