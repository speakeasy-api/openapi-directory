import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetClassificationsIdRequest extends SpeakeasyBase {
    /**
     * The ID of the classification resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetClassificationsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * A classification, in general, is something that can describe other resources, such as countries, genres or
     *
     * @remarks
     * languages. How they're described (included or excluded, and whether they're the primary classification
     * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
     * and could have an effect only on directory information, or may have an effect on ad decisioning.
     *
     */
    data?: shared.Classification;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetClassificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getClassificationsId200ApplicationVndApiPlusJsonObject?: GetClassificationsId200ApplicationVndApiPlusJson;
}
