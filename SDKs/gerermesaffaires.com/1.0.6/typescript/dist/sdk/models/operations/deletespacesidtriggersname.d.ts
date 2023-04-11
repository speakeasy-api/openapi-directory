import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdTriggersNameSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class DeleteSpacesIdTriggersNameRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * trigger name
     */
    name: string;
}
export declare class DeleteSpacesIdTriggersNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
