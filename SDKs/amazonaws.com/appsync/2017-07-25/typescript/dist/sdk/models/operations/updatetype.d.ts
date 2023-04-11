import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The new type format: SDL or JSON.
 */
export declare enum UpdateTypeRequestBodyFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class UpdateTypeRequestBody extends SpeakeasyBase {
    /**
     * The new definition.
     */
    definition?: string;
    /**
     * The new type format: SDL or JSON.
     */
    format: UpdateTypeRequestBodyFormatEnum;
}
export declare class UpdateTypeRequest extends SpeakeasyBase {
    requestBody: UpdateTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
    /**
     * The new type name.
     */
    typeName: string;
}
export declare class UpdateTypeResponse extends SpeakeasyBase {
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
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateTypeResponse?: shared.UpdateTypeResponse;
}
