import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAutoMLJobV2XAmzTargetEnum {
    SageMakerCreateAutoMLJobV2 = "SageMaker.CreateAutoMLJobV2"
}
export declare class CreateAutoMLJobV2Request extends SpeakeasyBase {
    createAutoMLJobV2Request: shared.CreateAutoMLJobV2Request;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAutoMLJobV2XAmzTargetEnum;
}
export declare class CreateAutoMLJobV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAutoMLJobV2Response?: shared.CreateAutoMLJobV2Response;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
