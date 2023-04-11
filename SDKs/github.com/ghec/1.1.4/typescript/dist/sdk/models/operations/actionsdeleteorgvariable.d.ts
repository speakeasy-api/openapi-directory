import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteOrgVariableRequest extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsDeleteOrgVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
