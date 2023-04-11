import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListClassesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Filter the classes by state
 */
export declare enum ListClassesStateEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived"
}
export declare class ListClassesRequest extends SpeakeasyBase {
    /**
     * Filter the classes by state
     */
    state?: ListClassesStateEnum;
}
export declare class ListClassesResponse extends SpeakeasyBase {
    /**
     * The list of classes
     */
    classDetails?: shared.ClassDetails[];
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
