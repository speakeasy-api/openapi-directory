import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateConstraint = "AWS242ServiceCatalogService.CreateConstraint"
}
export declare class CreateConstraintRequest extends SpeakeasyBase {
    createConstraintInput: shared.CreateConstraintInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConstraintXAmzTargetEnum;
}
export declare class CreateConstraintResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createConstraintOutput?: shared.CreateConstraintOutput;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
