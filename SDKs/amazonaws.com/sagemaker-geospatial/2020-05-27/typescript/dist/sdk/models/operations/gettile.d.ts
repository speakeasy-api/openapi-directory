import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The output data type of the tile operation.
 */
export declare enum GetTileOutputDataTypeEnum {
    Int32 = "INT32",
    Float32 = "FLOAT32",
    Int16 = "INT16",
    Float64 = "FLOAT64",
    Uint16 = "UINT16"
}
/**
 * Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.
 */
export declare enum GetTileTargetEnum {
    Input = "INPUT",
    Output = "OUTPUT"
}
export declare class GetTileRequest extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the tile operation.
     */
    arn: string;
    /**
     * The particular assets or bands to tile.
     */
    imageAssets: string[];
    /**
     * Determines whether or not to return a valid data mask.
     */
    imageMask?: boolean;
    /**
     * The output data type of the tile operation.
     */
    outputDataType?: GetTileOutputDataTypeEnum;
    /**
     * The data format of the output tile. The formats include .npy, .png and .jpg.
     */
    outputFormat?: string;
    /**
     * Property filters for the imagery to tile.
     */
    propertyFilters?: string;
    /**
     * Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.
     */
    target: GetTileTargetEnum;
    /**
     * Time range filter applied to imagery to find the images to tile.
     */
    timeRangeFilter?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The x coordinate of the tile input.
     */
    x: number;
    /**
     * The y coordinate of the tile input.
     */
    y: number;
    /**
     * The z coordinate of the tile input.
     */
    z: number;
}
export declare class GetTileResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getTileOutput?: shared.GetTileOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
