import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateReturnShippingLabelXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCreateReturnShippingLabel = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"
}
export declare class CreateReturnShippingLabelRequest extends SpeakeasyBase {
    createReturnShippingLabelRequest: shared.CreateReturnShippingLabelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReturnShippingLabelXAmzTargetEnum;
}
export declare class CreateReturnShippingLabelResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createReturnShippingLabelResult?: shared.CreateReturnShippingLabelResult;
    /**
     * InvalidInputCombinationException
     */
    invalidInputCombinationException?: any;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * ReturnShippingLabelAlreadyExistsException
     */
    returnShippingLabelAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
