import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdTriggersNameSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesIdTriggersNameRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * trigger name
     */
    name: string;
}
export declare class PostSpacesIdTriggersNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
