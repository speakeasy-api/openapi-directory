import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
 */
export declare class CreateThingTypeRequestBodyThingTypeProperties extends SpeakeasyBase {
    searchableAttributes?: string[];
    thingTypeDescription?: string;
}
export declare class CreateThingTypeRequestBody extends SpeakeasyBase {
    /**
     * Metadata which can be used to manage the thing type.
     */
    tags?: shared.Tag[];
    /**
     * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
     */
    thingTypeProperties?: CreateThingTypeRequestBodyThingTypeProperties;
}
export declare class CreateThingTypeRequest extends SpeakeasyBase {
    requestBody: CreateThingTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the thing type.
     */
    thingTypeName: string;
}
export declare class CreateThingTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createThingTypeResponse?: shared.CreateThingTypeResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
