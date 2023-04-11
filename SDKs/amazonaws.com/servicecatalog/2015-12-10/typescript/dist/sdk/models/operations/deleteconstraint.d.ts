import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteConstraint = "AWS242ServiceCatalogService.DeleteConstraint"
}
export declare class DeleteConstraintRequest extends SpeakeasyBase {
    deleteConstraintInput: shared.DeleteConstraintInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConstraintXAmzTargetEnum;
}
export declare class DeleteConstraintResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteConstraintOutput?: Record<string, any>;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
