import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateTrialComponentXAmzTargetEnum {
    SageMakerAssociateTrialComponent = "SageMaker.AssociateTrialComponent"
}
export declare class AssociateTrialComponentRequest extends SpeakeasyBase {
    associateTrialComponentRequest: shared.AssociateTrialComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateTrialComponentXAmzTargetEnum;
}
export declare class AssociateTrialComponentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateTrialComponentResponse?: shared.AssociateTrialComponentResponse;
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
