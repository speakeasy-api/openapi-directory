import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddAssociationXAmzTargetEnum {
    SageMakerAddAssociation = "SageMaker.AddAssociation"
}
export declare class AddAssociationRequest extends SpeakeasyBase {
    addAssociationRequest: shared.AddAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddAssociationXAmzTargetEnum;
}
export declare class AddAssociationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addAssociationResponse?: shared.AddAssociationResponse;
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
