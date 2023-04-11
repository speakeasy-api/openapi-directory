import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyAvailabilityZoneGroupActionEnum {
    ModifyAvailabilityZoneGroup = "ModifyAvailabilityZoneGroup"
}
/**
 * Indicates whether you are opted in to the Local Zone group or Wavelength Zone group. The only valid value is <code>opted-in</code>. You must contact <a href="https://console.aws.amazon.com/support/home#/case/create%3FissueType=customer-service%26serviceCode=general-info%26getting-started%26categoryCode=using-aws%26services">Amazon Web Services Support</a> to opt out of a Local Zone or Wavelength Zone group.
 */
export declare enum GETModifyAvailabilityZoneGroupOptInStatusEnum {
    OptedIn = "opted-in",
    NotOptedIn = "not-opted-in"
}
export declare enum GETModifyAvailabilityZoneGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyAvailabilityZoneGroupRequest extends SpeakeasyBase {
    action: GETModifyAvailabilityZoneGroupActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The name of the Availability Zone group, Local Zone group, or Wavelength Zone group.
     */
    groupName: string;
    /**
     * Indicates whether you are opted in to the Local Zone group or Wavelength Zone group. The only valid value is <code>opted-in</code>. You must contact <a href="https://console.aws.amazon.com/support/home#/case/create%3FissueType=customer-service%26serviceCode=general-info%26getting-started%26categoryCode=using-aws%26services">Amazon Web Services Support</a> to opt out of a Local Zone or Wavelength Zone group.
     */
    optInStatus: GETModifyAvailabilityZoneGroupOptInStatusEnum;
    version: GETModifyAvailabilityZoneGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyAvailabilityZoneGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
