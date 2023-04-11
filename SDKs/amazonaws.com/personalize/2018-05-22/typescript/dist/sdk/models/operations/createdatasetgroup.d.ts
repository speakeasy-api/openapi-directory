import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDatasetGroupXAmzTargetEnum {
    AmazonPersonalizeCreateDatasetGroup = "AmazonPersonalize.CreateDatasetGroup"
}
export declare class CreateDatasetGroupRequest extends SpeakeasyBase {
    createDatasetGroupRequest: shared.CreateDatasetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetGroupXAmzTargetEnum;
}
export declare class CreateDatasetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDatasetGroupResponse?: shared.CreateDatasetGroupResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
