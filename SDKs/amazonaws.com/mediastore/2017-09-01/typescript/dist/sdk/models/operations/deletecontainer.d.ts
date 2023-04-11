import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteContainerXAmzTargetEnum {
    MediaStore20170901DeleteContainer = "MediaStore_20170901.DeleteContainer"
}
export declare class DeleteContainerRequest extends SpeakeasyBase {
    deleteContainerInput: shared.DeleteContainerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContainerXAmzTargetEnum;
}
export declare class DeleteContainerResponse extends SpeakeasyBase {
    /**
     * ContainerInUseException
     */
    containerInUseException?: any;
    /**
     * ContainerNotFoundException
     */
    containerNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteContainerOutput?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
