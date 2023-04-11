import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAssociationXAmzTargetEnum {
    SageMakerDeleteAssociation = "SageMaker.DeleteAssociation"
}
export declare class DeleteAssociationRequest extends SpeakeasyBase {
    deleteAssociationRequest: shared.DeleteAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssociationXAmzTargetEnum;
}
export declare class DeleteAssociationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAssociationResponse?: shared.DeleteAssociationResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
