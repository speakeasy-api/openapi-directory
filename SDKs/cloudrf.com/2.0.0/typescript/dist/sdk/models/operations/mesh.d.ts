import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeshSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class MeshRequest extends SpeakeasyBase {
    /**
     * Super layer name eg. National_map
     */
    name: string;
    /**
     * Network name eg. 100_BLUE_repeaters_nationwide
     */
    network: string;
}
export declare class MeshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
