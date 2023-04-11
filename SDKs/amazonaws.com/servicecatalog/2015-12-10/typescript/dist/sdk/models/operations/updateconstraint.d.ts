import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateConstraint = "AWS242ServiceCatalogService.UpdateConstraint"
}
export declare class UpdateConstraintRequest extends SpeakeasyBase {
    updateConstraintInput: shared.UpdateConstraintInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConstraintXAmzTargetEnum;
}
export declare class UpdateConstraintResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateConstraintOutput?: shared.UpdateConstraintOutput;
}
