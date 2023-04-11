import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateAccelerator = "GlobalAccelerator_V20180706.CreateAccelerator"
}
export declare class CreateAcceleratorRequest extends SpeakeasyBase {
    createAcceleratorRequest: shared.CreateAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAcceleratorXAmzTargetEnum;
}
export declare class CreateAcceleratorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAcceleratorResponse?: shared.CreateAcceleratorResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
