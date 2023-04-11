import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoryRatedAreasRequest extends SpeakeasyBase {
    /**
     * Latitude in decimal coordinates
     */
    latitude: number;
    /**
     * Longitude in decimal coordinates
     */
    longitude: number;
}
/**
 * Successful Reply
 */
export declare class GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson extends SpeakeasyBase {
    data?: shared.CategoryRatedAreas[];
    /**
     * Meta information about the returned object(s) in "data"
     */
    meta?: shared.Meta;
    warnings?: shared.Warning[];
}
export declare class GetCategoryRatedAreasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * code    | title
     *
     * @remarks
     * ------- | -------------------------------------
     * 477     | INVALID FORMAT
     * 572     | INVALID OPTION
     * 32171   | MANDATORY DATA MISSING
     */
    error400?: shared.Error400;
    /**
     * Internal Server Error
     */
    error500?: shared.Error500;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Reply
     */
    getCategoryRatedAreas200ApplicationVndAmadeusPlusJsonObject?: GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson;
}
