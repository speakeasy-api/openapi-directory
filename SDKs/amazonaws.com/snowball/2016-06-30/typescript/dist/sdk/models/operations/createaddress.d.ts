import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAddressXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCreateAddress = "AWSIESnowballJobManagementService.CreateAddress"
}
export declare class CreateAddressRequest extends SpeakeasyBase {
    createAddressRequest: shared.CreateAddressRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAddressXAmzTargetEnum;
}
export declare class CreateAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAddressResult?: shared.CreateAddressResult;
    /**
     * InvalidAddressException
     */
    invalidAddressException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedAddressException
     */
    unsupportedAddressException?: any;
}
