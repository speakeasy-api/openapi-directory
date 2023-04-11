import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
 */
export declare enum DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum {
    Region = "region",
    AvailabilityZone = "availability-zone",
    AvailabilityZoneId = "availability-zone-id"
}
export declare class DescribeAcceleratorOfferingsRequestBody extends SpeakeasyBase {
    /**
     *  The list of accelerator types to describe.
     */
    acceleratorTypes?: string[];
    /**
     *  The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
     */
    locationType: DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum;
}
export declare class DescribeAcceleratorOfferingsRequest extends SpeakeasyBase {
    requestBody: DescribeAcceleratorOfferingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAcceleratorOfferingsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAcceleratorOfferingsResponse?: shared.DescribeAcceleratorOfferingsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
