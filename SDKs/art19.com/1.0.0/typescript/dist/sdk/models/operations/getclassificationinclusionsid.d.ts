import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationInclusionsIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetClassificationInclusionsIdRequest extends SpeakeasyBase {
    /**
     * The ID of the classification inclusion resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetClassificationInclusionsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * Connects a Classification with a classified item like a Series, Season or Episode.
     *
     * @remarks
     *
     */
    data?: shared.ClassificationInclusion;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetClassificationInclusionsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getClassificationInclusionsId200ApplicationVndApiPlusJsonObject?: GetClassificationInclusionsId200ApplicationVndApiPlusJson;
}
