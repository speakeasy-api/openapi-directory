import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContainerXAmzTargetEnum {
    MediaStore20170901CreateContainer = "MediaStore_20170901.CreateContainer"
}
export declare class CreateContainerRequest extends SpeakeasyBase {
    createContainerInput: shared.CreateContainerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerXAmzTargetEnum;
}
export declare class CreateContainerResponse extends SpeakeasyBase {
    /**
     * ContainerInUseException
     */
    containerInUseException?: any;
    contentType: string;
    /**
     * Success
     */
    createContainerOutput?: shared.CreateContainerOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
