import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of scaling mode.
 */
export declare enum CreateDedicatedIpPoolRequestBodyScalingModeEnum {
    Standard = "STANDARD",
    Managed = "MANAGED"
}
export declare class CreateDedicatedIpPoolRequestBody extends SpeakeasyBase {
    /**
     * The name of a dedicated IP pool.
     */
    poolName: string;
    /**
     * The type of scaling mode.
     */
    scalingMode?: CreateDedicatedIpPoolRequestBodyScalingModeEnum;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the pool.
     */
    tags?: shared.Tag[];
}
export declare class CreateDedicatedIpPoolRequest extends SpeakeasyBase {
    requestBody: CreateDedicatedIpPoolRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDedicatedIpPoolResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createDedicatedIpPoolResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
