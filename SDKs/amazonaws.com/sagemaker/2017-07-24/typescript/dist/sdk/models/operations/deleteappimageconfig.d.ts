import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppImageConfigXAmzTargetEnum {
    SageMakerDeleteAppImageConfig = "SageMaker.DeleteAppImageConfig"
}
export declare class DeleteAppImageConfigRequest extends SpeakeasyBase {
    deleteAppImageConfigRequest: shared.DeleteAppImageConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppImageConfigXAmzTargetEnum;
}
export declare class DeleteAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
