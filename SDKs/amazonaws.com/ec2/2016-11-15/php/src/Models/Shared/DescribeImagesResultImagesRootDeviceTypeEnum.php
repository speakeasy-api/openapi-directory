<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume. */
enum DescribeImagesResultImagesRootDeviceTypeEnum: string
{
    case EBS = 'ebs';
    case INSTANCE_STORE = 'instance-store';
}
